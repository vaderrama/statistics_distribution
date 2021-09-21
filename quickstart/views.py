from django.contrib.auth.models import User, Group
from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework import permissions
#from quickstart.serializers import UserSerializer, GroupSerializer
from random import randint
import scipy.stats
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.utils import json

import sys
sys.path.insert(0, '/home/vaderrama/Escritorio/statistics_distribution/quickstart')
import distributions



@api_view(['GET','PUT','DELETE'])
def getDistributions(request):
    if request.method == 'GET':
         return HttpResponse(json.dumps(distributions.getContinuosDistributions(), indent=4, sort_keys=True), content_type="application/json")
    else:
        return HttpResponse("Error: Cant get list of distributions")
     
       
           #if type == 'continuous_distributions':
      #  if type == 'discrete_distributions':
       #      return HttpResponse(json.dumps(dist.getDiscreteDistributions, indent=4, sort_keys=True), content_type="application/json")

   


@api_view(['GET', 'PUT', 'DELETE'])
def getCalc(request):
    if request.method == 'GET':
        samples = int(request.query_params.get('samples'))
        distributions = request.query_params.getlist('data[]')
        data = []
        s = []
        param = randint(0, 10)
        for distribution in distributions:
            if distribution != 'undefined':
                dist = getattr(scipy.stats, distribution)
                if dist.numargs == 0:
                    s = dist.rvs(size=samples)
                elif dist.numargs == 1:
                    s = dist.rvs(param, size=samples)
                elif dist.numargs == 2:
                    s = dist.rvs(param, param, size=samples)
                elif dist.numargs == 3:
                    s = dist.rvs(param, param, param, size=samples)
                elif dist.numargs == 4:
                    s = dist.rvs(param, param, param, param, size=samples)
                data.append(s.tolist())
         
        return HttpResponse(json.dumps(data, indent=4, sort_keys=True), content_type="application/json")

    else:
        return HttpResponse("Fail getting distribution")

'''

class UserViewSet(viewsets.ModelViewSet):
  
    #API endpoint that allows users to be viewed or edited.
    
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


class GroupViewSet(viewsets.ModelViewSet):
   
   # API endpoint that allows groups to be viewed or edited.
    
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]

'''
   