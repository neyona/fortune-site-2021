# fortune_docker/contactus/admin.py
from django.contrib import admin

from .models import Contact


class ContactAdmin(admin.ModelAdmin):
    list_display = ('name', 'email',)


admin.site.register(Contact, ContactAdmin)
