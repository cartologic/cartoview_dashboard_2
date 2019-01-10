from django.shortcuts import render
from django.views.generic import TemplateView
from rest_framework import generics

from .models.Dashboard import Dashboard
from .api.serializers import DashboardSerializer


class HomePage(TemplateView):
    def get(self, request, *args, **kwargs):
        return render(request, "cartoview_dashboard_2/build/index.html", {})


class DashboardAPIList(generics.ListCreateAPIView):
    queryset = Dashboard.objects.all()
    serializer_class = DashboardSerializer


class DashboardAPIDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Dashboard.objects.all()
    serializer_class = DashboardSerializer
