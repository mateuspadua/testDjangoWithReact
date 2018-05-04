from rest_framework.serializers import ModelSerializer
from starships.models import Starship


class StarshipSerializer(ModelSerializer):

    class Meta:
        model = Starship
        fields = '__all__'




