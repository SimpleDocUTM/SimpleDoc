from rest_framework import viewsets
from .models import Quiz, QuizOption, QuizQuestion
from .serializers import QuizSerializer, QuizOptionSerializer, QuizQuestionSerializer

# Create your views here.
class QuizViewSet(viewsets.ModelViewSet):
    queryset = Quiz.objects.all()
    serializer_class = QuizSerializer

class QuizOptionViewSet(viewsets.ModelViewSet):
    queryset = QuizOption.objects.all()
    serializer_class = QuizOptionSerializer

class QuizQuestionViewSet(viewsets.ModelViewSet):
    queryset = QuizQuestion.objects.all()
    serializer_class = QuizQuestionSerializer
