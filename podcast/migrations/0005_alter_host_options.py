# Generated by Django 5.0.6 on 2024-07-06 19:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("podcast", "0004_episode_highlight"),
    ]

    operations = [
        migrations.AlterModelOptions(
            name="host",
            options={"ordering": ["-id"]},
        ),
    ]
