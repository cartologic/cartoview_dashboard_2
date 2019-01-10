from django.conf.urls import url, include
from .views import HomePage

urlpatterns = [
    url(r'^api/', include('cartoview_dashboard_2.api.urls')),
    url(r'^', HomePage.as_view()),
]
