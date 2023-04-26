from rest_framework import viewsets
from .serializer import FarmSerializer
from .models import Farm

# Create your views here.
class FarmView(viewsets.ModelViewSet):
    serializer_class = FarmSerializer
    queryset = Farm.objects.all()