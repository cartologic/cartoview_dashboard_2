from django.conf.urls import url
from .views import HomePage, DashboardAPIList, DashboardAPIDetail

urlpatterns = [
    url(r'^api/$', DashboardAPIList.as_view()),
    url(r'^api/(?P<pk>\d+)$', DashboardAPIDetail.as_view()),

    url(r'^', HomePage.as_view()),
]
