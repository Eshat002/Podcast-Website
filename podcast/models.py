from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)
    image = models.ImageField(upload_to='category_images/', null= True)

    def __str__(self):
        return self.name
    
    class Meta:
        ordering = ['-id']

        
class Tag(models.Model):
    name = models.CharField(max_length=50, unique=True)

    class Meta:
        ordering = ['-id']

    def __str__(self):
        return self.name



class Host(models.Model):
    name = models.CharField(max_length=100)
    host_image = models.ImageField(upload_to='host_image/')

    def __str__(self):
        return self.name


class Episode(models.Model):
    hosts = models.ManyToManyField(Host, related_name='episodes', blank=False)
    title = models.CharField(max_length=255)
    description = models.TextField()
    cover_image = models.ImageField(upload_to='podcast_covers/')
    audio_file = models.FileField(upload_to='episode_audio/')
    duration = models.DurationField()
    release_date = models.DateTimeField(auto_now_add=True)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True)
    tags = models.ManyToManyField(Tag, blank=True)

 
    def __str__(self):
        return f"ep{self.id}-{self.title}"
