# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from rest_framework import viewsets
from .serializers import ContactsSerializer
from .models import Contacts


class ContactsViewSet(viewsets.ModelViewSet):
    queryset = Contacts.objects.all()
    serializer_class = ContactsSerializer
