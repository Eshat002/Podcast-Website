# serializers.py
from rest_framework import serializers
from podcast.models import Category, Episode, Tag, Host



class HostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Host
        fields = '__all__'


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ['id', 'name']


   # Add all other fields you need
        
class CategorySerializer(serializers.ModelSerializer):
    # latest_episode = serializers.SerializerMethodField()

    class Meta:
        model = Category
        fields = '__all__'

    # def get_latest_episode(self, obj):
    #     latest_episode = obj.episode_set.order_by('-release_date').first()
    #     return EpisodeSerializer(latest_episode).data if latest_episode else None

class EpisodeSerializer(serializers.ModelSerializer):
    tags = TagSerializer(many=True)
    hosts = HostSerializer(many=True)
    category = CategorySerializer()

    class Meta:
        model = Episode
        fields = ['id', 'title', 'description', "cover_image", "audio_file" ,"category", "release_date", 'tags','hosts']