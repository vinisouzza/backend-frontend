"""
ASGI config for alocai project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.1/howto/deployment/asgi/
"""

import os

from django.core.asgi import get_asgi_application
from django.http import JsonResponse

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'alocai.settings')

application = get_asgi_application()
def options_view(request):
    response = JsonResponse({})
    response["Access-Control-Allow-Origin"] = "*"
    response["Access-Control-Allow-Methods"] = "POST, GET, OPTIONS"
    response["Access-Control-Allow-Headers"] = "Authorization, Content-Type"
    return response
