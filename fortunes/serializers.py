# fortune_docker/fortunes/serializers.py
from django.contrib.auth import get_user_model
from rest_framework import serializers

from .models import Fortune


class FortuneSerializer(serializers.ModelSerializer):

    class Meta:
        model = Fortune
        fields = ('id', 'author', 'title', 'body', 'created_at',)


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = get_user_model()
        fields = ('id', 'username',)
