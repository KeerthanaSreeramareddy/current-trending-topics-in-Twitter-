from django.urls import path
from app import views
urlpatterns = [
    path('', views.index, name='index'),
    path('trending-topics',views.trending_topics, name='trending_topics'),
]