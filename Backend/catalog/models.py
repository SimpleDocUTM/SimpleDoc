from django.db import models
from django.contrib.auth import models as authmodels

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


class QuizOptionSubmission(models.Model):
    question = models.ForeignKey(QuizQuestion, on_delete=models.CASCADE)
    option = models.ForeignKey(QuizOption, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.question.question

class Concept(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    description = models.CharField(max_length=255)

    class Meta:
        ordering = ['created']

    def __str__(self):
        return self.description

class Documentation(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    title = models.TextField() #the name of the concept
    description = models.TextField()
    difficulty = models.IntegerField(default=0)
    contributor = models.TextField() 
    concept = models.ForeignKey(Concept, on_delete=models.CASCADE)
    rating = models.FloatField(default=0)

    class Meta:
        ordering = ['created']

    def __str__(self):
        return self.title

class DocumentationContribution(models.Model):
    conceptname = models.TextField()
    documentname = models.TextField()
    definition = models.TextField()
    description = models.TextField()
    contributorName = models.TextField() #name
    contributorUtorid = models.TextField() #Utorid
    contributorStdNum = models.TextField() #student number
    contributorEmail = models.TextField() #email
    exampleDescription1 = models.TextField() # example description
    example1 = models.TextField() #example1
    exampleDescription2 = models.TextField() # example description
    example2 = models.TextField() #example2
    exampleDescription3 = models.TextField() # example description
    example3 = models.TextField() #example3

    def __str__(self):
        return self.documentname

class User(authmodels.User):
    reputation = models.IntegerField(default=0)
    user_id = models.CharField(max_length=10, primary_key = True)
    logged_In = models.BooleanField()
    is_admin = models.BooleanField()

    def __str__(self):
        return self.user_id
