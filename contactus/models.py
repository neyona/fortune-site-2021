# fortune_docker/contactus/models.py
from django.db import models
# The following is the model for contact information sent by
# anonymous users.


class Contact(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField()
    messageinput = models.TextField(max_length=10000, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return '%s %s' % (self.name, self.email)
