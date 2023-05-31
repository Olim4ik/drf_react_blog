from django.urls import path
from accounts.views import CustomAccountCreate

app_name = 'accounts'

urlpatterns = [
    path('register/', CustomAccountCreate.as_view(), name='create_account')
]
