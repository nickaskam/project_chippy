from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Todos(models.Model):
    CategoryType = models.TextChoices('CategoryType', 'LONGTERM SHORTTERM')
    name = models.CharField(max_length=100)
    complete = models.BooleanField()
    todotype = models.CharField(
        blank=True, choices=CategoryType.choices, max_length=10)
    todosowner = models.ForeignKey(
        User, related_name="todos", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
