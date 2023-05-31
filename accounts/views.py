from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers import RegisterAccountSerializer


class CustomAccountCreate(APIView):
    
    permission_classes = [AllowAny]

    def post(self, request):
        reg_serializer = RegisterAccountSerializer(data=request.data)

        if reg_serializer.is_valid():
            account = reg_serializer.save()
            
            if account:
                return Response(status=status.HTTP_201_CREATED)
        
        return Response(reg_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

