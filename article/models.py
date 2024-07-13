from django.db import models
from django.template.defaultfilters import truncatechars_html


class ArticleCategory(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class ArticleTag(models.Model):
    name = models.CharField(max_length=50)

    class Meta:
        ordering = ["-id"]

    def __str__(self):
        return self.name


class Article(models.Model):
    title = models.CharField(max_length=150)
    content = models.TextField()
    image = models.ImageField(upload_to="article_image", null= True)
    category = models.ForeignKey(ArticleCategory, on_delete=models.SET_NULL, null=True)
    tags = models.ManyToManyField(ArticleTag, blank=True)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return truncatechars_html(self.title, 20)
