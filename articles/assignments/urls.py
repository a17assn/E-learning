# from django.urls import path

# from articles.views import (
#     AssignmentListView,
#     AssignmentDetailView,
#     AssignmentCreateView,
#     AssignmentUpdateView,
#     AssignmentDeleteView
# )

# urlpatterns = [
#     path('', AssignmentListView.as_view()),
#     path('create/', AssignmentCreateView.as_view()),
#     path('<pk>/', AssignmentDetailView.as_view()),
#     path('<pk>/update/', AssignmentUpdateView.as_view()),
#     path('<pk>/delete/', AssignmentDeleteView.as_view())
# ]


from rest_framework.routers import DefaultRouter
from articles.views import AssignmentViewSet

router = DefaultRouter()
router.register(r'', AssignmentViewSet, basename='assignments')
urlpatterns = router.urls
