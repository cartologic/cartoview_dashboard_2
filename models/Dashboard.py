from django.db import models


class Dashboard(models.Model):
    title = models.CharField(max_length=120)
    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

    def __unicode__(self):
        return self.title
