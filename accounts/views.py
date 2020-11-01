from django.shortcuts import render

from django.shortcuts import render, redirect
from django.contrib import messages

from django.contrib.auth.mixins import LoginRequiredMixin

from rest_framework.generics import RetrieveUpdateAPIView ,RetrieveAPIView
from django.urls import reverse

from .models import Profile , UserAccount
from .serializers import ProfileSerializer

from rest_framework import permissions


class ProfileUpdateSerializer(RetrieveUpdateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = (permissions.IsAuthenticated, )

class ProfileSerializer(RetrieveAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = (permissions.IsAuthenticated, )
