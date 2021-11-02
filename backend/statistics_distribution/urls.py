
from django.urls import include, path
from rest_framework import routers
from quickstart import views
from django.views.generic import TemplateView
from quickstart.views import *


router = routers.DefaultRouter()

urlpatterns = [
    path('app/', TemplateView.as_view(template_name="index.html")),
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('api-dist/get_cont',getContinuousDistributions),
    path('api-dist/get_charts',getCalc),
   path('api-dist/get_disc',getDiscreteDistributions), 

]
