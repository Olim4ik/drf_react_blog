from django.shortcuts import get_object_or_404, render
from rest_framework import filters, generics, viewsets
from rest_framework.permissions import (SAFE_METHODS, AllowAny, BasePermission,
                                        DjangoModelPermissions, IsAdminUser,
                                        IsAuthenticated,
                                        IsAuthenticatedOrReadOnly)
from rest_framework.response import Response

from blog.models import Post

from .serializers import PostSerializer


class PostUserWritePermission(BasePermission):
    
    message = 'Editing post is restricted to the author only.'

    def has_object_permission(self, request, view, obj):

        if request.method in SAFE_METHODS: 
            return True

        return obj.author == request.user
    

class PostList(generics.ListAPIView):

    permission_classes = [ IsAuthenticated ]
    serializer_class = PostSerializer   

    def get_queryset(self):
        user = self.request.user
        return Post.objects.filter(author=user)


class PostDetail(generics.ListAPIView):  # RetrieveDestroyAPIView / generics.RetrieveAPIView, PostUserWritePermission

    # permission_classes = [ PostUserWritePermission ]
    # queryset = Post.objects.all()
    serializer_class = PostSerializer

    def get_queryset(self):
        # http://127.0.0.1:8000/api/posts/?slug=one
        slug = self.request.query_params.get('slug', None)
        print(slug)
        return Post.objects.filter(slug=slug)

    # def get_object(self):
        # item  = self.kwargs.get('pk')
        # return get_object_or_404(Post, slug=item)


class PostListDetailFilter(generics.ListAPIView):

    queryset = Post.objects.all()
    serializer_class = PostSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['=slug']  # search field


class PostSearch(generics.ListAPIView):
    permission_classes = [AllowAny]
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['^slug']

# class PostList(viewsets.ModelViewSet):
    
#     permission_classes = [ PostUserWritePermission ]
#     serializer_class = PostSerializer
#     # queryset = Post.postobjects.all()

#     def get_object(self, queryset=None, **kwargs):
#         item  = self.kwargs.get('pk')
#         return get_object_or_404(Post, slug=item)

#     # Define Custom Queryset
#     def get_queryset(self):
#         return Post.objects.all()


# class PostList(viewsets.ViewSet):
#     permission_classes = [IsAuthenticated]
#     queryset = Post.postobjects.all()

#     def list(self, request):
#         serializer_class = PostSerializer(self.queryset, many=True)
#         return Response(serializer_class.data)
    
#     def retrieve(self, request, pk=None):
#         post = get_object_or_404(self.queryset, pk=pk)
#         serializer_class = PostSerializer(post)
#         return Response(serializer_class.data)



# def list(self, request):
#     pass

# def create(self, request):
#     pass

# def retrieve(self, request, pk=None):
#     pass

# def update(self, request, pk=None):
#     pass

# def partial_update(self, request, pk=None):
#     pass

# def destroy(self, request, pk=None):
#     pass




