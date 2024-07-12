from django.urls import path
from .views import LatestArticleView

urlpatterns = [path("latest-articles/", LatestArticleView.as_view())]
