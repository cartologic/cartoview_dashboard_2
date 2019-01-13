# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('cartoview_dashboard_2', '0003_auto_20190110_2311'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='dashboard',
            name='owner',
        ),
        migrations.AddField(
            model_name='dashboard',
            name='created_by',
            field=models.ForeignKey(related_name='created_by', on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL, null=True),
        ),
    ]
