# serializers.py
from rest_framework import serializers
from Episodes.models import Category, Episode, Tag

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ['id', 'name']

class EpisodeSerializer(serializers.ModelSerializer):
    tags = TagSerializer(many=True)

    class Meta:
        model = Episode
        fields = '__alll__'
        
class CategorySerializer(serializers.ModelSerializer):
    latest_episode = serializers.SerializerMethodField()

    class Meta:
        model = Category
        fields = ['id', 'name', 'latest_episode']

    def get_latest_episode(self, obj):
        latest_episode = obj.episode_set.order_by('-release_date').first()
        return EpisodeSerializer(latest_episode).data if latest_episode else None
