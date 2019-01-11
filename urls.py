from django.conf.urls import url, include
from .views import HomePage

urlpatterns = [
    url(r'^api/dashboards/', include('cartoview_dashboard_2.api.urls', namespace='dashboards-api')),
    url(r'^', HomePage.as_view()),
]
