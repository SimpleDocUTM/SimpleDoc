from django.shortcuts import get_object_or_404
from django.utils import timezone
from rest_framework import generics, status, permissions
from rest_framework.response import Response


from .models import Quiz, QuizOption, QuizQuestion, QuizOptionSubmission, Documentation, DocumentationContribution, Concept, User, QuizUser
from .serializers import QuizListSerializer, QuizOptionSerializer, QuizQuestionSerializer, QuizDetailSerializer, QuizOptionSubmissionSerializer, QuizSubmissionSerializer, UserSerializer, DocumentationListSerializer, DocumentationSerializer, DocumentationContributionSerializer, ConceptListSerializer


class UserInfoAPI(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer = UserSerializer


class DocumentationListAPI(generics.ListAPIView):
    queryset = Documentation.objects.all()
    serializer_class = DocumentationListSerializer


class DocumentationAPI(generics.RetrieveAPIView):
    queryset = Documentation.objects.all()
    serializer_class = DocumentationSerializer


class DocumentationContributeAPI(generics.CreateAPIView):
    serializer_class = DocumentationContributionSerializer

    def post(self, request, *args, **kwargs):
        conceptname = request.data['conceptname']
        documentname = request.data['documentname']
        definition = request.data['definition']
        description = request.data['description']

        if DocumentationContribution.objects.filter(conceptname=conceptname, documentname=documentname, definition=definition, description=description).exists():
            return Response({"message": "Documentation already exists."}, status=status.HTTP_400_BAD_REQUEST)
        else:
            obj = DocumentationContribution.objects.create(
                conceptname=conceptname, documentname=documentname, definition=definition, description=description)
            obj.save()
            # return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(self.get_serializer(obj).data)


class ConceptListAPI(generics.ListAPIView):
    queryset = Concept.objects.all()
    serializer_class = ConceptListSerializer


class QuizListAPI(generics.ListAPIView):
    """
    Grabs the full list of quizzes.
    Must be authenticated to use.
    """
    queryset = Quiz.objects.all()
    serializer_class = QuizListSerializer
    permission_classes = [
        permissions.IsAuthenticated
    ]


class QuizDetailAPI(generics.RetrieveAPIView):
    """
    Grabs the details of an individual quiz.
    Must be authenticated to use.
    """
    queryset = Quiz.objects.all()
    serializer_class = QuizDetailSerializer
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get(self, *args, **kwargs):
        # Grab the quiz id from the URL params.
        quiz_id = kwargs['pk']
        quiz = get_object_or_404(Quiz, id=quiz_id)

        # If a user is getting a quiz we want to create quiz user in the db.
        quiz_user, created = QuizUser.objects.get_or_create(
            user=self.request.user, quiz=quiz)

        if created:
            # Create a user option submission (leaving the answers blank, but filling in the question and user) for every question.
            for question in QuizQuestion.objects.filter(quiz=quiz):
                QuizOptionSubmission.objects.create(
                    question=question, quiz_user=quiz_user)

        return Response(self.get_serializer(quiz).data)


def _is_valid_quiz_option(question, option):
    # Verify that the user has selected an option that is applicable for the chosen question.
    return QuizQuestion.objects.filter(question=question, quizoption=option).exists()


class QuizOptionSubmissionAPI(generics.UpdateAPIView):
    """
    Allows users to submit answers to an individual question in a quiz.
    Must be authenticated to use.
    """
    serializer_class = QuizOptionSubmissionSerializer
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def patch(self, request, *args, **kwargs):
        question_id = request.data['question']
        option_id = request.data['option']
        quiz_user_id = request.data['quizuser']

        question = get_object_or_404(QuizQuestion, id=question_id)
        option = get_object_or_404(QuizOption, id=option_id)
        quiz_user = get_object_or_404(QuizUser, id=quiz_user_id)

        if _is_valid_quiz_option(question, option):
            obj = get_object_or_404(
                QuizOptionSubmission, question=question, quiz_user=quiz_user)

            obj.option = option
            obj.save()

            return Response(self.get_serializer(obj).data)
        else:
            return Response(
                {"message": "You must choose a valid option."},
                status=status.HTTP_400_BAD_REQUEST)


class QuizSubmissionAPI(generics.GenericAPIView):
    """
    Allows users to submit their entire quiz.
    Must be authenticated to use.
    """
    serializer_class = QuizSubmissionSerializer
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def post(self, request, *args, **kwargs):
        # Grab all the data from the request.
        quiz_user_id = request.data['quizuser']
        quiz_id = request.data['quiz']

        quiz_user = get_object_or_404(QuizUser, id=quiz_user_id)
        quiz = get_object_or_404(Quiz, id=quiz_id)

        quiz_user.has_submitted = True
        quiz_user.date_submitted = timezone.now()

        correct_option_submissions = 0

        # Loop through all of the options selected by the user to accumulate the number of correct ones.
        for option_submission in QuizOptionSubmission.objects.filter(quiz_user=quiz_user):
            correct_option = QuizOption.objects.get(
                question=option_submission.question, is_correct=True)

            if option_submission.option == correct_option:
                correct_option_submissions += 1

        quiz_user.result = (correct_option_submissions /
                            quiz_user.quiz.quizquestion_set.count()) * 100

        quiz_user.save()

        return Response(self.get_serializer(quiz).data)
