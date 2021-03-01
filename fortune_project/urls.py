"""fortune_project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path, re_path

urlpatterns = [
    # admin
    path('octopus-garden/', admin.site.urls), # something other than admin
    # in actuality go to /octopus-garden/login/?next=/best-ceph-bff/
    # the following is the api
    path('oct-api/v1/', include('fortunes.urls')),
    path('oct-auth/', include('rest_framework.urls')),
    path('oct-api/v1/oct-auth/', include('rest_auth.urls')),
    # messages
    path('', include('contactus.urls')),
    # These are at 'bard-api/v1/'
    re_path(r'', include('frontend.urls')),
]
