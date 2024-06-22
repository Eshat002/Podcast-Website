from django.urls import path,include
from podcast.api.views import LatestCategoriesWithLatestEpisodeView

urlpatterns = [
       path('latest-categories/', LatestCategoriesWithLatestEpisodeView.as_view()),
]
