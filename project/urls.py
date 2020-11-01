from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),


    path("auth/", include("djoser.urls")),
    path("auth/", include("djoser.urls.jwt")),
    path('auth/', include('djoser.urls.authtoken')),

    path('assignments/', include('articles.assignments.urls')),
    path('graded-assignments/', include('articles.graded_assignments.urls')),
    path('accounts/', include('accounts.urls')),


]
if settings.DEBUG:
    import debug_toolbar
    urlpatterns = [
        path('__debug__/', include(debug_toolbar.urls)),
    ] + urlpatterns

urlpatterns += [re_path(r"^.*",
                        TemplateView.as_view(template_name="index.html"))]
