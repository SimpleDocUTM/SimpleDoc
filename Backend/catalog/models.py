from django.db import models
from PIL import Image #For user avatar

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


class User(models.Model):
    reputation = models.IntegerField(default=0);
    user_id = models.CharField(maxLength=10);
    avatar = models.ImageField(blank=true, null=true)
    is_admin = models.BooleanField()

    def login():
        #returns true if user is logged in through shibboleth
	return

    def contribute():
        #Creates a concept and attributes it to the user using user_id
	return

    def increase_rep():
	#Increase the user's reputation
	return

    def decrease_rep():
	#decrease the user's reputation
	return

    def make_admin():
	#make the user an administrator
	return
