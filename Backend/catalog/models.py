from django.db import models
from django.contrib.auth.models import AbstractUser


class Quiz(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=255)

    class Meta:
        ordering = ['created']
        # Make plural on admin site "Quizzes".
        verbose_name_plural = "Quizzes"

    def __str__(self):
        return self.title


class QuizQuestion(models.Model):
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE)
    question = models.CharField(max_length=255)
    order = models.IntegerField(default=0)

    def __str__(self):
        return self.question


class QuizOption(models.Model):
    text = models.CharField(max_length=255)
    question = models.ForeignKey(QuizQuestion, on_delete=models.CASCADE)
    is_correct = models.BooleanField(default=False)

    def __str__(self):
        return self.text


class Concept(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    name = models.TextField()
    category = models.TextField() #CSC108 or CSC148

    class Meta:
        ordering = ['created']

    def __str__(self):
        return self.name


class Documentation(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    title = models.TextField()  # the name of the concept
    description = models.TextField()
    definition = models.TextField()
    difficulty = models.IntegerField(default=0)
    contributor = models.TextField()
    concept = models.ForeignKey(Concept, on_delete=models.CASCADE)
    rating = models.FloatField(default=0)
    # blank = True, null=True makes this field optional. We do not NEED a quiz for every piece of documentation.
    quiz = models.ForeignKey(
        Quiz, on_delete=models.CASCADE, blank=True, null=True)

    class Meta:
        ordering = ['created']

    def __str__(self):
        return self.title


class DocumentationContribution(models.Model):
    conceptname = models.TextField()
    documentname = models.TextField()
    definition = models.TextField()
    description = models.TextField()
    contributorName = models.TextField()  # name
    contributorUtorid = models.TextField()  # Utorid
    contributorStdNum = models.TextField()  # student number
    contributorEmail = models.TextField()  # email
    exampleDescription1 = models.TextField()  # example description
    example1 = models.TextField()  # example1
    exampleDescription2 = models.TextField()  # example description
    example2 = models.TextField()  # example2
    exampleDescription3 = models.TextField()  # example description
    example3 = models.TextField()  # example3

    def __str__(self):
        return self.documentname


class DocumentationVideo(models.Model):
    documentation = models.ForeignKey(Documentation, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    url = models.URLField()

    class Meta:
        ordering = ['id']

    def __str__(self):
        return self.title


class DocumentationExample(models.Model):
    documentation = models.ForeignKey(Documentation, on_delete=models.CASCADE)
    description = models.TextField()
    code = models.TextField()


class User(AbstractUser):
    reputation = models.IntegerField(default=0)
    user_id = models.CharField(max_length=10, primary_key=True)

    def __str__(self):
        return self.username


class QuizUser(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE)
    result = models.DecimalField(default=0, decimal_places=2, max_digits=6)
    has_submitted = models.BooleanField(default=False)
    date_submitted = models.DateTimeField(null=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.user.username


class QuizOptionSubmission(models.Model):
    quiz_user = models.ForeignKey(QuizUser, on_delete=models.CASCADE)
    question = models.ForeignKey(QuizQuestion, on_delete=models.CASCADE)
    option = models.ForeignKey(QuizOption, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.question.question


class SuggestedDocumentation(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    documentation = models.ForeignKey(Documentation, on_delete=models.CASCADE)
    is_active = models.BooleanField()

    def __str__(self):
        return self.documenation_id