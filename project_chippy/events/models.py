from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Event(models.Model):
    CategoryType = models.TextChoices('CategoryType', 'WORK SCHOOL FUN')
    name = models.CharField(max_length=100)
    description = models.TextField()
    start_time = models.DateTimeField(null=True)
    end_time = models.DateTimeField(null=True)
    category = models.CharField(
        blank=True, choices=CategoryType.choices, max_length=10)
    complete = models.TextField()
    owner = models.ForeignKey(
        User, related_name="events", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
