"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from .views import front, my_django_view,front1, my_profile_view,my_payment_view

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', front, name="front"),
    path('fetch/',my_django_view,name="view"),
    path('product/<pk>',front1,name="product_details"),
    path('payment_profile/',front,name="payment"),
    path('profile/',my_profile_view,name="profile"),
    path('payment/',my_payment_view,name="pay")
]
