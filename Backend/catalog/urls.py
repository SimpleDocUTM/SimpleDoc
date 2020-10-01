from django.urls import include, path

from .views import QuizListAPI, QuizDetailAPI
    # , QuizOptionViewSet, QuizQuestionViewSet



urlpatterns = [
    path('quizzes/', QuizListAPI.as_view()),
    path('quizzes/<int:pk>/', QuizDetailAPI.as_view()),
]

