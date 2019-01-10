# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('cartoview_dashboard_2', '0002_dashboard_owner'),
    ]

    operations = [
        migrations.AddField(
            model_name='dashboard',
            name='updated_by',
            field=models.ForeignKey(related_name='updated_by', on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL, null=True),
        ),
        migrations.AlterField(
            model_name='dashboard',
            name='owner',
            field=models.ForeignKey(related_name='owner', on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL, null=True),
        ),
    ]
