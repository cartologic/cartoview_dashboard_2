from rest_framework.generics import ListAPIView, RetrieveAPIView, RetrieveUpdateAPIView, DestroyAPIView, CreateAPIView
from ..models.Dashboard import Dashboard
from .serializers import DashboardGeneralSerializer, DashboardCreateSerializer


class DashboardListAPI(ListAPIView):
    queryset = Dashboard.objects.all()
    serializer_class = DashboardGeneralSerializer


class DashboardDetailAPI(RetrieveAPIView):
    queryset = Dashboard.objects.all()
    serializer_class = DashboardGeneralSerializer
    lookup_field = 'id'


class DashboardUpdateAPI(RetrieveUpdateAPIView):
    queryset = Dashboard.objects.all()
    serializer_class = DashboardGeneralSerializer
    lookup_field = 'id'

    def perform_update(self, serializer):
        serializer.save(updated_by=self.request.user)


class DashboardDeleteAPI(DestroyAPIView):
    queryset = Dashboard.objects.all()
    serializer_class = DashboardGeneralSerializer
    lookup_field = 'id'


class DashboardCreateAPI(CreateAPIView):
    queryset = Dashboard.objects.all()
    serializer_class = DashboardCreateSerializer

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user, updated_by=self.request.user)
