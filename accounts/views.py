from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers import RegisterAccountSerializer
from rest_framework_simplejwt.tokens import RefreshToken


class CustomAccountCreate(APIView):
    
    permission_classes = [AllowAny]

    def post(self, request):
        reg_serializer = RegisterAccountSerializer(data=request.data)

        if reg_serializer.is_valid():
            account = reg_serializer.save()
            
            if account:
                return Response(status=status.HTTP_201_CREATED)
        
        return Response(reg_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class BlacklistTokenView(APIView):
    permission_classes = [AllowAny]
    authentication_classes = ()

    def post(self, request):
        try:
            refresh_token = request.data['refresh_token']
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)
