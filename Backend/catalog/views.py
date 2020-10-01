from rest_framework import generics


from .models import Quiz, QuizOption, QuizQuestion
from .serializers import QuizListSerializer, QuizOptionSerializer, QuizQuestionSerializer, QuizDetailSerializer


class QuizListAPI(generics.ListAPIView):
    queryset = Quiz.objects.all()
    serializer_class = QuizListSerializer


class QuizDetailAPI(generics.RetrieveAPIView):
    queryset = Quiz.objects.all()
    serializer_class = QuizDetailSerializer
