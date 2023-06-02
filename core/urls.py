from django.contrib import admin
from django.urls import include, path
from rest_framework_simplejwt.views import (
    TokenObtainPairView, TokenRefreshView
)
from rest_framework.schemas import get_schema_view
from rest_framework.documentation import include_docs_urls  


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

    path('docs/', include_docs_urls(title='BlogAPI')),
    # pyyaml => API documentaion + install uritemplate
    path('schema', get_schema_view(
        title="BlogAPI",
        description="API for the BlogAPI",
        version="1.0.0"
    ), name='openapi-schema'),

]
