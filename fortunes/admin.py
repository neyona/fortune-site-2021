# fortune_docker/fortunes/admin.py
from django.contrib import admin

from .models import Fortune

class FortuneAdmin(admin.ModelAdmin):
    list_display = ('title', 'body',)

admin.site.register(Fortune, FortuneAdmin)
