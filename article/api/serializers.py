from rest_framework import serializers
from article.models import *


class ArticleCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ArticleCategory
        fields = "__all__"


class ArticleTagSerializer(serializers.ModelSerializer):
    class Meta:
        model = ArticleTag
        fields = "__all__"


class ArticleSerializer(serializers.ModelSerializer):
    tags = ArticleTagSerializer(many=True)
    category = ArticleCategorySerializer()
    timestamp = serializers.DateTimeField(format="%d %B, %Y")

    class Meta:
        model = Article
        fields = ["id", "title", "content", "category", "tags", "timestamp", "image"]
