from django.contrib import admin


from .models import Assignment, Choice, Question, GradedAssignment

admin.site.register(Assignment)
admin.site.register(Choice)
admin.site.register(Question)
admin.site.register(GradedAssignment)
