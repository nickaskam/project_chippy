from rest_framework import serializers
from todos.models import Todos

# Event Serializer


class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todos
        fields = '__all__'
