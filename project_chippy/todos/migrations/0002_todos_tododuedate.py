# Generated by Django 3.0.7 on 2020-06-17 01:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todos', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='todos',
            name='todoDueDate',
            field=models.DateField(blank=True, null=True),
        ),
    ]
