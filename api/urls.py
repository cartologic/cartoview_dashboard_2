from django.conf.urls import url
from .views import DashboardListAPI


urlpatterns = [
    url(r'^dashboards/', DashboardListAPI.as_view()),
]

