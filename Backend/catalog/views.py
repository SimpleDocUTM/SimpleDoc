from django.shortcuts import get_object_or_404
from rest_framework import generics, status
from rest_framework.response import Response


from .models import Quiz, QuizOption, QuizQuestion, QuizOptionSubmission, Documentation, DocumentationContribution, Concept, User, SuggestedDocumentation
from .serializers import QuizListSerializer, QuizOptionSerializer, QuizQuestionSerializer, QuizDetailSerializer, QuizOptionSubmissionSerializer, UserSerializer, DocumentationListSerializer, DocumentationSerializer, DocumentationContributionSerializer, ConceptListSerializer, SuggestedDocumentationSerializer


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

class UserInfoAPI(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer = UserSerializer
    
class DocumentationListAPI(generics.ListAPIView):
    queryset = Documentation.objects.all()
    serializer_class = DocumentationListSerializer


class DocumentationAPI(generics.RetrieveAPIView):
    queryset = Documentation.objects.all()

    def get_request(self, request):

        if request.method == 'GET':
            serializer = DocumentationSerializer
            return Response(serializer.data)

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
                obj = DocumentationContribution.objects.create(conceptname=conceptname, documentname=documentname, definition=definition, description=description)
                obj.save()
                #return Response(serializer.data, status=status.HTTP_201_CREATED)
                return Response(self.get_serializer(obj).data)
            

        
class ConceptListAPI(generics.ListAPIView):
    queryset = Concept.objects.all()
    serializer_class = ConceptListSerializer

class SuggestedDocumentationListAPI(generics.ListAPIView):
	queryset = SuggestedDocumentation.objects.all()
	serializer_class = SuggestedDocumentationSerializer 
