from rest_framework import serializers
from ..models.Dashboard import Dashboard


class DashboardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dashboard
        fields = ('id', 'title', 'date_created', 'date_updated')
