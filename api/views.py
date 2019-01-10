from rest_framework.generics import ListAPIView, RetrieveAPIView, UpdateAPIView, DestroyAPIView
from ..models.Dashboard import Dashboard
from .serializers import DashboardSerializer


class DashboardListAPI(ListAPIView):
    queryset = Dashboard.objects.all()
    serializer_class = DashboardSerializer


class DashboardDetailAPI(RetrieveAPIView):
    queryset = Dashboard.objects.all()
    serializer_class = DashboardSerializer
    lookup_field = 'id'


class DashboardUpdateAPI(UpdateAPIView):
    queryset = Dashboard.objects.all()
    serializer_class = DashboardSerializer
    lookup_field = 'id'


class DashboardDeleteAPI(DestroyAPIView):
    queryset = Dashboard.objects.all()
    serializer_class = DashboardSerializer
    lookup_field = 'id'
