from django.urls import include, path

from .views import QuizListAPI, QuizDetailAPI, QuizOptionSubmissionAPI, DocumentationListAPI, DocumentationAPI, ConceptListAPI, UserInfoAPI
    # , QuizOptionViewSet, QuizQuestionViewSet



urlpatterns = [
    path('quizzes/', QuizListAPI.as_view()),
    path('quizzes/<int:pk>/', QuizDetailAPI.as_view()),
    path('quizzes/save-answer/', QuizOptionSubmissionAPI.as_view()),
    path('user/<pk>/', UserInfoAPI.as_view()),

    path('documents/', DocumentationListAPI.as_view()),
    path('documents/<int:pk>/', DocumentationAPI.as_view()),
    path('concepts/<int:pk>/', ConceptListAPI.as_view()),
]

