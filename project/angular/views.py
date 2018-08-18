# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render

from django.contrib import staticfiles

def index(request):
    context = {
        "name" : "Hello"
    }
    return render(request, 'index.html', context)
