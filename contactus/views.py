# frontend_docker/contactus/views.py
from rest_framework import generics, permissions
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from rest_framework import status
from rest_framework_api_key.models import APIKey
from rest_framework_api_key.permissions import HasAPIKey
from django.views.decorators.csrf import ensure_csrf_cookie

from .models import Contact
from .serializers import ContactSerializer

# The following takes in messages via frontend form, they are allowed when
# there is  API key in the header.


class ContactListCreate(generics.ListCreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    parser_classes = [JSONParser]
    permission_classes = ([HasAPIKey | permissions.IsAuthenticated])

    @ensure_csrf_cookie
    def contact_list(request):
        return Response({"message": "Got some data!", "data": request.data})
