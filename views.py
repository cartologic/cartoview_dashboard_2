from django.shortcuts import render
from django.views.generic import TemplateView


class HomePage(TemplateView):
    def get(self, request, *args, **kwargs):
        return render(request, "cartoview_dashboard_2/build/index.html", {})
