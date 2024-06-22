# views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from podcast.models import Category
from .serializers import CategorySerializer

class LatestCategoriesWithLatestEpisodeView(APIView):
    def get(self, request):
        categories = Category.objects.order_by('-id')[:6]
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)
