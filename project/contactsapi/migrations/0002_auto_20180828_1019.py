# -*- coding: utf-8 -*-
# Generated by Django 1.11.15 on 2018-08-28 10:19
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contactsapi', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contacts',
            name='name',
            field=models.CharField(max_length=100),
        ),
    ]
