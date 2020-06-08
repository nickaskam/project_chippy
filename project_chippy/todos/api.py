from todos.models import Todos
from rest_framework import viewsets, permissions
from .serializers import TodoSerializer

# Event Viewset


class TodosViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = TodoSerializer

    def get_queryset(self):
        return self.request.user.todos.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
