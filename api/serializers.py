from rest_framework.serializers import ModelSerializer, HyperlinkedIdentityField
from ..models.Dashboard import Dashboard


class DashboardGeneralSerializer(ModelSerializer):
    details_url = HyperlinkedIdentityField(
        view_name='dashboards-api:DashboardAPIDetail',
        lookup_field='id'
    )
    delete_url = HyperlinkedIdentityField(
        view_name='dashboards-api:DashboardAPIDelete',
        lookup_field='id'
    )
    update_url = HyperlinkedIdentityField(
        view_name='dashboards-api:DashboardAPIUpdate',
        lookup_field='id'
    )

    class Meta:
        model = Dashboard
        fields = ('id', 'title', 'date_created', 'details_url', 'delete_url', 'update_url')


class DashboardCreateSerializer(ModelSerializer):
    class Meta:
        model = Dashboard
        fields = ('title',)
