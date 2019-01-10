from rest_framework.generics import ListAPIView, RetrieveAPIView
from ..models.Dashboard import Dashboard
from .serializers import DashboardSerializer


class DashboardListAPI(ListAPIView):
    queryset = Dashboard.objects.all()
    serializer_class = DashboardSerializer


class DashboardDetailAPI(RetrieveAPIView):
    queryset = Dashboard.objects.all()
    serializer_class = DashboardSerializer
    lookup_field = 'id'
