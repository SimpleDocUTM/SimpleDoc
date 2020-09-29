from django.db import models


class QuizQuestion(models.Model):
    question = models.CharField(max_length=255)
    order = models.IntegerField()

    def __str__(self):
        return self.question


class QuizOption(models.Model):
    text = models.CharField(max_length=255)
    question = models.ForeignKey(QuizQuestion, on_delete=models.CASCADE)
    is_correct = models.BooleanField(default=False)

    def __str__(self):
        return self.text


class Quiz(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=255)
    question = models.ManyToManyField(QuizQuestion)

    def __str__(self):
        return self.title



