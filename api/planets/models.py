from django.db import models


class Planet(models.Model):
    name = models.CharField(max_length=150)

    def __str__(self):
        return self.name
