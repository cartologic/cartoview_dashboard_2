from rest_framework.pagination import PageNumberPagination


class DashboardPageNumberPagination(PageNumberPagination):
    page_size = 4
