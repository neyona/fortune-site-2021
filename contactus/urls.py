# fortune_docker/contactus/urls.py
from django.urls import path, include

from .views import ContactListCreate


urlpatterns = [
    path('bard-api/v1/', ContactListCreate.as_view()),
]
