from django.db import models


class Dashboard(models.Model):
    title = models.CharField(max_length=120)
