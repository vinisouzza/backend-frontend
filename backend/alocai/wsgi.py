"""
WSGI config for alocai project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.1/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application
from django.http import JsonResponse

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'alocai.settings')

application = get_wsgi_application()
def options_view(request):
    response = JsonResponse({})
    response["Access-Control-Allow-Origin"] = "*"
    response["Access-Control-Allow-Methods"] = "POST, GET, OPTIONS"
    response["Access-Control-Allow-Headers"] = "Authorization, Content-Type"
    return response
