from django.urls import path,include
from podcast.api.views import LatestCategoriesView, LatestEpisodesView

urlpatterns = [
       path('latest-categories/', LatestCategoriesView.as_view()),
       path('latest-episodes/', LatestEpisodesView.as_view()),
]
