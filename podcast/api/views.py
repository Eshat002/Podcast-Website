# views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from podcast.models import Category
from .serializers import CategorySerializer, EpisodeSerializer
from podcast.models import Episode
from rest_framework import status


class LatestCategoriesView(APIView):
    def get(self, request):
        categories = Category.objects.order_by("-id")[:6]
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class LatestEpisodesView(APIView):
    def get(self, request):
        latest_episodes = Episode.objects.order_by("-id")[:6]
        serializer = EpisodeSerializer(latest_episodes, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
