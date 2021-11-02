
from django.contrib.auth.models import User, Group
from rest_framework import serializers


class Statistics_distributionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        fields = ['normal','binomial','poisson']

