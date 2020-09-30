from rest_framework import serializers
from .models import Quiz, QuizQuestion, QuizOption

class QuizListSerializer(serializers.ModelSerializer):
    question_count = serializers.SerializerMethodField()

    class Meta:
        model = Quiz
        fields = ['id', 'title', 'question_count']
        read_only_fields = ['question_count']

    def get_question_count(self, obj):
            return obj.quizquestion_set.all().count()


class QuizOptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuizOption
        fields = ['id', 'question', 'text']


class QuizQuestionSerializer(serializers.ModelSerializer):
    quizoption_set = QuizOptionSerializer(many=True)

    class Meta:
        model = QuizQuestion
        fields = '__all__'


class QuizDetailSerializer(serializers.ModelSerializer):
    quizquestion_set = QuizQuestionSerializer(many=True)

    class Meta:
        model = Quiz
        fields = '__all__'
