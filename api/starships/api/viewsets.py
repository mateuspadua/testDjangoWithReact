from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from starships.models import Starship
from .serializers import StarshipSerializer


class StarshipViewSet(ModelViewSet):

    queryset = Starship.objects.all()
    serializer_class = StarshipSerializer

    def count(self, response):
        count = self.get_queryset().count()
        return Response({'count': count})

