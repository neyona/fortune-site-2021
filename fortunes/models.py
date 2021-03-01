# fortune_docker/fortunes/models.py
from django.db import models

from django.contrib.auth import get_user_model

# The following is model for Fortunes on the backend.
# They have an author, title, and fortune as the body.


class Fortune(models.Model):
    author = models.ForeignKey(
        get_user_model(),
        on_delete=models.CASCADE,
        null=True
    )
    title = models.CharField(max_length=50)
    body = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return '%s %s' % (self.title, self.body)
