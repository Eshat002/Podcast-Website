# Generated by Django 5.0.6 on 2024-06-22 13:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("podcast", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="category",
            name="image",
            field=models.ImageField(null=True, upload_to="category_images/"),
        ),
    ]
