from rest_framework.generics import ListAPIView
from ..models.Dashboard import Dashboard
from .serializers import DashboardSerializer


class DashboardListAPI(ListAPIView):
    queryset = Dashboard.objects.all()
    serializer_class = DashboardSerializer
