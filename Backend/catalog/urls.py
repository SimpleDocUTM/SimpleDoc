from django.urls import include, path

from .views import QuizListAPI, QuizDetailAPI, QuizOptionSubmissionAPI, UserInfoAPI
    # , QuizOptionViewSet, QuizQuestionViewSet



urlpatterns = [
    path('quizzes/', QuizListAPI.as_view()),
    path('quizzes/<int:pk>/', QuizDetailAPI.as_view()),
    path('quizzes/save-answer/', QuizOptionSubmissionAPI.as_view()),
    path('user/<pk>/', UserInfoAPI.as_view())

]

