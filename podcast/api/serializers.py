# serializers.py
from rest_framework import serializers
from podcast.models import Category, Episode, Tag

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ['id', 'name']

class EpisodeSerializer(serializers.ModelSerializer):
    tags = TagSerializer(many=True)

    class Meta:
        model = Episode
        fields = ['id', 'title', 'description', "cover_image", "audio_file" ,"category", "release_date", 'tags']  # Add all other fields you need
        
class CategorySerializer(serializers.ModelSerializer):
    # latest_episode = serializers.SerializerMethodField()

    class Meta:
        model = Category
        fields = '__all__'

    # def get_latest_episode(self, obj):
    #     latest_episode = obj.episode_set.order_by('-release_date').first()
    #     return EpisodeSerializer(latest_episode).data if latest_episode else None
