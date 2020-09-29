from rest_framework import serializers
from .models import Quiz, QuizQuestion, QuizOption

class QuizSerializer(serializers.ModelSerializer):
    class Meta:
        model = Quiz
        fields = ('__all__')


class QuizOptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuizOption
        fields = ('__all__')

class QuizQuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuizQuestion
        fields = ('__all__')
