from django.urls import path
from accounts.views import CustomAccountCreate, BlacklistTokenView

app_name = 'accounts'

urlpatterns = [
    path('register/', CustomAccountCreate.as_view(), name='create_account'),
    path('logout/blacklist/', BlacklistTokenView.as_view(), name='blacklist'),
]
