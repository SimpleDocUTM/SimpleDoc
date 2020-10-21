from django.contrib import admin

from .models import Quiz, QuizQuestion, QuizOption, QuizOptionSubmission, Documentation, DocumentationContribution, Concept, User
# Register your models here.

admin.site.register(Quiz)
admin.site.register(QuizQuestion)
admin.site.register(QuizOption)
admin.site.register(User)
admin.site.register(QuizOptionSubmission)
admin.site.register(Documentation)
admin.site.register(DocumentationContribution)
admin.site.register(Concept)
