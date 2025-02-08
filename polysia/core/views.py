from django.shortcuts import render

def landing_page(request):
    return render(request, 'core/landing.html')



def about_page(request):
    return render(request, 'core/about.html')


def services_page(request):
    return render(request, 'core/services.html')


def portfolio_page(request):
    return render(request, 'core/portfolio.html')


def blogs_page(request):
    return render(request, 'core/blog.html')



def careers_page(request):
    return render(request, 'core/careers.html')


def contact_page(request):
    return render(request, 'core/contact.html')


def applyform_page(request):
    return render(request, 'core/applyform.html')