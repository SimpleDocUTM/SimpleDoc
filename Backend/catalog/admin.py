from django.contrib import admin
from .models import Quiz, QuizQuestion, QuizOption, QuizOptionSubmission
# Register your models here.

admin.site.register(Quiz)
admin.site.register(QuizQuestion)
admin.site.register(QuizOption)
admin.site.register(User)
admin.site.register(QuizOptionSubmission)
