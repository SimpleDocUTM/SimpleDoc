from django.shortcuts import get_object_or_404
from rest_framework import generics, status
from rest_framework.response import Response

from .models import Quiz, QuizOption, QuizQuestion, QuizOptionSubmission, User
from .serializers import QuizListSerializer, QuizOptionSerializer, QuizQuestionSerializer, QuizDetailSerializer, QuizOptionSubmissionSerializer, UserSerializer


class QuizListAPI(generics.ListAPIView):
    queryset = Quiz.objects.all()
    serializer_class = QuizListSerializer


class QuizDetailAPI(generics.RetrieveAPIView):
    queryset = Quiz.objects.all()
    serializer_class = QuizDetailSerializer


class QuizOptionSubmissionAPI(generics.UpdateAPIView):
    serializer_class = QuizOptionSubmissionSerializer

    def patch(self, request, *args, **kwargs):
        question_id = request.data['question']
        option_id = request.data['option']

        question = get_object_or_404(QuizQuestion, id=question_id)
        option = get_object_or_404(QuizOption, id=option_id)

        # Verify that the user has selected an option that is applicable for the chosen question.
        if QuizQuestion.objects.filter(question=question, quizoption=option).exists():
            obj, created = QuizOptionSubmission.objects.get_or_create(question=question)

            obj.option = option
            obj.save()

            return Response(self.get_serializer(obj).data)
        else:
            return Response(
                {"message": "You must choose a valid option."},
                status=status.HTTP_400_BAD_REQUEST)

class UserGetInfoAPI(generics.RetrieveAPIView):
    users = User.objects.all()
    serializer = UserSerializer