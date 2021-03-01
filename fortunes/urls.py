# fortune_docker/fortunes/urls.py
from django.urls import path, include

from .views import FortuneList, FortuneDetail

urlpatterns = [
    path('', FortuneList.as_view()),
    path('<int:pk>/', FortuneDetail.as_view()),
    path('oct-auth/', include('rest_auth.urls')),
]
