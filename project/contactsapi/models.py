# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models


class Contacts(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name
