from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .models import Quiz, QuizQuestion, QuizOption, QuizOptionSubmission, QuizUser, Documentation, DocumentationContribution, Concept, User, SuggestedDocumentation


class MyUserAdmin(UserAdmin):
    # Explanation: https://stackoverflow.com/a/23063657
    model = User
    fieldsets = UserAdmin.fieldsets + (
        (None, {'fields': ('reputation', 'user_id',)}),
    )

# Register your models here.
admin.site.register(Quiz)
admin.site.register(QuizQuestion)
admin.site.register(QuizOption)
admin.site.register(QuizUser)
#  We have to register the MyUserAdmin with the custom user model to allow for user creation from the admin panel.
admin.site.register(User, MyUserAdmin)
admin.site.register(QuizOptionSubmission)
admin.site.register(Documentation)
admin.site.register(DocumentationContribution)
admin.site.register(Concept)
admin.site.register(SuggestedDocumentation)
