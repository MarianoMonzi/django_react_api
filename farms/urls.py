from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from farms import views

# api versioning
router = routers.DefaultRouter()
router.register(r'farms', views.FarmView, 'farms')

urlpatterns = [
    path("api/v1/", include(router.urls)),
    path("docs/", include_docs_urls(title="Farms API"))
]
