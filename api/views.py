from rest_framework.generics import ListAPIView, RetrieveAPIView, RetrieveUpdateAPIView, DestroyAPIView, CreateAPIView
from rest_framework.permissions import IsAuthenticated
from .permissions import IsOwner
from .pagination import DashboardPageNumberPagination
from ..models.Dashboard import Dashboard
from .serializers import DashboardGeneralSerializer, DashboardCreateSerializer


class DashboardListAPI(ListAPIView):
    queryset = Dashboard.objects.all()
    serializer_class = DashboardGeneralSerializer
    pagination_class = DashboardPageNumberPagination


class DashboardDetailAPI(RetrieveAPIView):
    queryset = Dashboard.objects.all()
    serializer_class = DashboardGeneralSerializer
    lookup_field = 'id'


class DashboardUpdateAPI(RetrieveUpdateAPIView):
    queryset = Dashboard.objects.all()
    serializer_class = DashboardGeneralSerializer
    lookup_field = 'id'
    permission_classes = [IsOwner]

    def perform_update(self, serializer):
        serializer.save(updated_by=self.request.user)


class DashboardDeleteAPI(DestroyAPIView):
    queryset = Dashboard.objects.all()
    serializer_class = DashboardGeneralSerializer
    lookup_field = 'id'


class DashboardCreateAPI(CreateAPIView):
    queryset = Dashboard.objects.all()
    serializer_class = DashboardCreateSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user, updated_by=self.request.user)
