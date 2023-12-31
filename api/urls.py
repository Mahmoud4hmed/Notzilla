from django.urls import path
from . import views

urlpatterns = [
    path('notes/', views.getNotes, name="notes"),
    path('notes/create/', views.createNote, name="create-note"),
    path('notes/<str:pk>/', views.getNote, name="note"),
]
