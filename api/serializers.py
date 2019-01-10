from rest_framework.serializers import ModelSerializer
from ..models.Dashboard import Dashboard


class DashboardGeneralSerializer(ModelSerializer):
    class Meta:
        model = Dashboard
        fields = ('id', 'title', 'created_by', 'updated_by', 'date_created', 'date_updated')


class DashboardCreateSerializer(ModelSerializer):
    class Meta:
        model = Dashboard
        fields = ('title',)
