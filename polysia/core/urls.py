from django.urls import path
from . import views

urlpatterns = [
    path('', views.landing_page, name='landing'),
    path('about/',views.about_page,name='about'),
    path('services/',views.services_page,name='services'),
    path('portfolio/',views.portfolio_page,name='portfolio'),
    path('blog/',views.blogs_page,name='blogs'),
    path('contact/',views.contact_page,name='contact'),
    path('careers/',views.careers_page,name='careers'),
    path('careers/applyform/',views.applyform_page,name='applyform'),
]