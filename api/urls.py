from django.conf.urls import url
from .views import DashboardListAPI, DashboardDetailAPI


urlpatterns = [
    url(r'^dashboards/(?P<id>\d+)/$', DashboardDetailAPI.as_view(), name="DashboardAPIDetail"),
    url(r'^dashboards/$', DashboardListAPI.as_view(), name="DashboardAPIList"),
]

