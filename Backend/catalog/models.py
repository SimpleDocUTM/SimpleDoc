from django.db import models
# from PIL import Image #For user avatar

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


class User(models.Model):
    reputation = models.IntegerField(default=0)
    user_id = models.CharField(maxLength=10)
    # avatar = models.ImageField(blank=True, null=True)
    logged_In = models.BooleanField()
    is_admin = models.BooleanField()

    def login(self):
        #returns true if user is logged in through shibboleth
        logged_In = True
	    return

    def contribute(self):
        #Creates a concept and attributes it to the user using user_id
	    return

    def increase_rep(self):
	#Increase the user's reputation
	    return

    def decrease_rep(self):
	#decrease the user's reputation
	    return

    def make_admin(self):
	#make the user an administrator
	    return

    def update_avatar(self):
        #Update the avatar for the user.
        return