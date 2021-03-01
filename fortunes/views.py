# fortune_docker/fortunes/views.py
from rest_framework import generics, permissions
from rest_framework.response import Response
# Rest Framework API Key is a module added to the project in the Pipfile
from rest_framework_api_key.models import APIKey
from rest_framework_api_key.permissions import HasAPIKey

from .models import Fortune
from .serializers import FortuneSerializer


class FortuneList(generics.ListCreateAPIView):
    # Setup so that only one page can read the api OR those who are authenticated
    permission_classes = [HasAPIKey | permissions.IsAuthenticated]
    queryset = Fortune.objects.all()
    serializer_class = FortuneSerializer


class FortuneDetail(generics.RetrieveUpdateDestroyAPIView):
    # Only those authenticated can see these
    permission_classes = (permissions.IsAuthenticated,)
    queryset = Fortune.objects.all()
    serializer_class = FortuneSerializer
