from rest_framework.views import APIView
from article.models import Article
from .serializers import ArticleSerializer
from rest_framework.response import Response
from rest_framework import status


class LatestArticleView(APIView):
    def get(self, request):
        articles = Article.objects.order_by("-id")[:2]
        serializer = ArticleSerializer(articles, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
