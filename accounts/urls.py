from django.urls import path

from .views import ProfileSerializer,ProfileUpdateSerializer

urlpatterns = [
    path('<pk>/update/', ProfileUpdateSerializer.as_view()),
    
    path('<pk>/', ProfileSerializer.as_view()),
]
