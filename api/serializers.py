from rest_framework.serializers import ModelSerializer
from ..models.Dashboard import Dashboard


class DashboardSerializer(ModelSerializer):
    class Meta:
        model = Dashboard
        fields = ('id', 'title', 'date_created', 'date_updated')
