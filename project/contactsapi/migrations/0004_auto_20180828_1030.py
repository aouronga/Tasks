# -*- coding: utf-8 -*-
# Generated by Django 1.11.15 on 2018-08-28 10:30
from __future__ import unicode_literals

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contactsapi', '0003_auto_20180828_1028'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contacts',
            name='date',
            field=models.DateTimeField(blank=True, default=datetime.datetime.now),
        ),
    ]