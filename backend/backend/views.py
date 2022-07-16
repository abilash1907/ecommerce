import base64
from django.shortcuts import render
import requests
import json
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from rest_framework.parsers import MultiPartParser, FormParser
def front(request):
    context = { }
    return render(request, 'index.html', context)
def front1(request,id):
    context = { }
    return render(request, 'index.html', context)
@csrf_exempt
@api_view(['POST'])
def my_django_view(request):
    print("connect")
    parser_classes = (MultiPartParser, FormParser)
    data=request.data
    print(data)
    url = "https://api.na.bambora.com/scripts/tokenization/tokens"
    header = {
          
          "content-type":"application/json"
      }
    
    result = requests.post(url,  data=json.dumps(data), headers=header)
    print(result)
    if result.status_code == 200:
        return HttpResponse(result)
    return HttpResponse("false")
@csrf_exempt
@api_view(['POST'])
def my_profile_view(request):
    print("connect")
    parser_classes = (MultiPartParser, FormParser)
    data=request.data
    print(data)
    url = "https://api.na.bambora.com/v1/profiles"
    header = {
          "Authorization":"Passcode MzgzNjEwOTU4OkMwNDFkNDk5YjAwNDQ0NTJhOTY2QmI4ZTk1MDRFZDMz",
          
          "content-type":"application/json"
      }
    
    result = requests.post(url,  data=json.dumps(data), headers=header)
    print(result)
    if result.status_code == 200:
        return HttpResponse("true")
    return HttpResponse("false")

@csrf_exempt
@api_view(['POST'])
def my_payment_view(request):
    print("connect")
    parser_classes = (MultiPartParser, FormParser)
    data=request.data
    print(data)
    url = "https://api.na.bambora.com/v1/payments"
    header = {
          "Authorization":"Passcode MzgzNjEwOTU4OjE5OGEyNGViOTdBMjQ3NDc5MkZBMkQ0NTMwZkNlNWQ5",
          
          "content-type":"application/json"
      }
    
    result = requests.post(url,  data=json.dumps(data), headers=header)
    print(result)
    if result.status_code == 200:
        return HttpResponse("true")
    else:
        return HttpResponse("false")
    