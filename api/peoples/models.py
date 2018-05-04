from django.db import models
from planets.models import Planet
from movies.models import Movie


class People(models.Model):
    name = models.CharField(max_length=100)
    height = models.DecimalField(decimal_places=2, max_digits=3)
    wieght = models.IntegerField()
    birth_year = models.CharField(max_length=10)
    planet_of_birth = models.ForeignKey(Planet, on_delete=models.CASCADE)
    movies = models.ManyToManyField(Movie)
    HAIRS_COLOR = (
        ('none', 'none'),
        ('n/a', 'n/a'),
        ('blond', 'blond'),
        ('black', 'black'),
        ('brown', 'brown'),
        ('white', 'white'),
    )
    hair_color = models.CharField(max_length=20, choices=HAIRS_COLOR)

    def __str__(self):
        return self.name






