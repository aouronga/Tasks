from .models import Contacts
from rest_framework import serializers


class ContactsSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Contacts
        fields = ('id', 'name')
