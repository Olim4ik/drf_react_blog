from django.contrib import admin
from django.urls import include, path
from rest_framework_simplejwt.views import (
    TokenObtainPairView, TokenRefreshView
)

urlpatterns = [
    # simple JWT
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    path('admin/', admin.site.urls),
    path('api/', include('blog_api.urls', namespace='blog_api')),

    # custop user account
    path('api/account/', include('accounts.urls', namespace='accounts')),

    # DRF login with existing account
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),

    path('', include('blog.urls', namespace='blog')),

]
