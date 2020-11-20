from django.urls import path
from .views import QuizListAPI, QuizDetailAPI, QuizOptionSubmissionAPI, DocumentationListAPI, DocumentationAPI, ConceptListAPI, UserInfoAPI, DocumentationContributeAPI, SuggestedDocumentationListAPI

urlpatterns = [
    path('quizzes/', QuizListAPI.as_view()),
    path('quizzes/<int:pk>/', QuizDetailAPI.as_view()),
    path('quizzes/save-answer/', QuizOptionSubmissionAPI.as_view()),
    # path('quizzes/submit/', QuizSubmissionAPI.as_view()),
    path('user/<pk>/', UserInfoAPI.as_view()),
    path('documents/', DocumentationListAPI.as_view()),
    path('documents/<int:pk>/', DocumentationAPI.as_view()),
    path('documents/contribution/', DocumentationContributeAPI.as_view()),
    path('concepts/', ConceptListAPI.as_view()),
    path('suggesteddocumentation/', SuggestedDocumentationListAPI.as_view()),
    # path('concepts/', ConceptListAPI.as_view()),
]
