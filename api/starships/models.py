from django.db import models


class Starship(models.Model):
    name = models.CharField(max_length=150)


