from rest_framework.viewsets import ModelViewSet
from peoples.models import People
from .serializers import PeopleSerializer


class PeoplesViewSet(ModelViewSet):
    queryset = People.objects.all()
    serializer_class = PeopleSerializer



