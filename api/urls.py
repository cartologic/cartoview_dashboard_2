from django.conf.urls import url
from .views import (
    DashboardListAPI, DashboardDetailAPI, DashboardUpdateAPI, DashboardDeleteAPI, DashboardCreateAPI)


urlpatterns = [
    url(r'^dashboards/(?P<id>\d+)/$', DashboardDetailAPI.as_view(), name="DashboardAPIDetail"),
    url(r'^dashboards/(?P<id>\d+)/edit/$', DashboardUpdateAPI.as_view(), name="DashboardAPIUpdate"),
    url(r'^dashboards/(?P<id>\d+)/delete/$', DashboardDeleteAPI.as_view(), name="DashboardAPIDelete"),
    url(r'^dashboards/create/$', DashboardCreateAPI.as_view(), name="DashboardAPICreate"),
    url(r'^dashboards/$', DashboardListAPI.as_view(), name="DashboardAPIList"),
]

