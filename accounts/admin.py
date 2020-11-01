from django.contrib import admin

from django.contrib.auth.admin import UserAdmin as BaseUserAdmin

from django.contrib.auth.models import Group

from .models import UserAccount, Profile, City


# class AccountAdmin(BaseUserAdmin):
#     # form = UserChangeForm
#     # add_form = UserCreationForm

#     list_display = ('email', 'name',
#                     'is_staff',  'is_superuser')
#     list_filter = ('is_superuser',)

#     fieldsets = (
#         (None, {'fields': ('email', 'is_staff', 'is_superuser', 'password')}),
#         ('Personal info', {
#          'fields': ('name',)}),
#         # ('Groups', {'fields': ('groups',)}),
#         # ('Permissions', {'fields': ('type_enter',)}),
#     )

#     add_fieldsets = (
#         (None, {'fields': ('email', 'is_staff',
#                            'is_superuser', 'password1', 'password2')}),
#         ('Personal info', {
#          'fields': ('name',)}),
#         # ('Groups', {'fields': ('groups',)}),
#         # ('Permissions', {'fields': ('type_enter',)}),
#     )

#     search_fields = ('email', 'name', 'phone')
#     ordering = ('email',)
#     filter_horizontal = ()


# admin.site.register(UserAccount, AccountAdmin)
admin.site.register(UserAccount)

admin.site.register(Profile)
admin.site.register(City)

admin.site.unregister(Group)
