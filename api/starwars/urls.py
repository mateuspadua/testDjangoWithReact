from django.conf.urls import url, include
from django.contrib import admin
from rest_framework import routers

from peoples.api.viewsets import PeoplesViewSet
from starships.api.viewsets import StarshipViewSet

router = routers.DefaultRouter()
router.register(r'peoples', PeoplesViewSet, base_name='peoples')
router.register(r'starships', StarshipViewSet, base_name='starships')

urlpatterns = [
    url(r'^v1/starships/count/', StarshipViewSet.as_view({'get': 'count'})),
    url(r'^v1/', include(router.urls)),
    url(r'^admin/', admin.site.urls),

]
