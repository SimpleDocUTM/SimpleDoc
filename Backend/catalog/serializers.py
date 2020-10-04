from rest_framework import serializers
from .models import Quiz, QuizQuestion, QuizOption, QuizOptionSubmission, User


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


class QuizOptionSubmissionSerializer(serializers.ModelSerializer):
    is_correct = serializers.SerializerMethodField()

    class Meta:
        model = QuizOptionSubmission
        fields = '__all__'
        read_only_fields = ['is_correct']

    def get_is_correct(self, obj):
        return obj.option.is_correct

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User #This is the model object we will be serializing.
        fields = '__all__' #These are the different fields that we want to be serialized. Typing '__all__' implies we want to serialize them all
    


