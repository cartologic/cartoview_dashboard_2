from rest_framework.permissions import BasePermission


class IsOwner(BasePermission):
    message = "You must be the owner of this dashboard."

    def has_object_permission(self, request, view, obj):
        return obj.created_by == request.user
