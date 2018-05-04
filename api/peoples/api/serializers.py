from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from planets.models import Planet
from peoples.models import People
from movies.models import Movie


class PeopleSerializer(ModelSerializer):

    planet_of_birth = serializers.StringRelatedField(read_only=True)

    planet_birth_write = serializers.PrimaryKeyRelatedField(
        queryset=Planet.objects.all(), write_only=True, source='planet_of_birth')

    films_count = serializers.SerializerMethodField()

    class Meta:
        model = People
        fields = ('id',
                  'name',
                  'height',
                  'wieght',
                  'hair_color',
                  'birth_year',
                  'planet_of_birth',
                  'planet_birth_write',
                  'films_count',
        )

    def get_films_count(self, peoples):
        return Movie.objects.filter(people=peoples).count()

