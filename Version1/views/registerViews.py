from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.mixins import LoginRequiredMixin
from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.views.generic import View, TemplateView, ListView, DetailView, CreateView, UpdateView, DeleteView
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from django.urls import reverse_lazy


class SignUpView (View):


    def post(self, request, *args, **kwargs):

        user = self.get_user_from_form(request)
        if not self.is_vali_user(user):
            pass

        user_obj = User.objects.create_user(username=user['email'],
                                            email=user['email'],
                                            password=user['password'])
        user_obj.profile.country = user['country']
        user_obj.profile.first_name = user['first_name']
        user_obj.profile.last_name = user['last_name']
        user_obj.save()
        return HttpResponse("Totul a mers perfect!")

    def get_user_from_form(self, request):

        user = {}
        user['email'] = request.POST['email']
        user['password'] = request.POST['password']
        user['confirmPassword'] = request.POST['confirmPassword']
        user['first_name'] = request.POST['first_name']
        user['last_name'] = request.POST['last_name']
        user['country'] = request.POST['country']
        return user

    def is_vali_user(self, user):
        if User.objects.filter(email=user['email']).exists():
            # treat this case later
            pass

        if user['password'] != user['confirmPassword']:
            # treat this case later
            pass

        return True


class SignInView(View):

    def post(self, request, *args, **kwargs):

        context = {}
        user_data = self.get_user_from_form(request)
        if user_data:
            user = authenticate(username=user_data['email'],
                                password=user_data['password'])
            if user:
                login(request=request,
                      user=user)
                return HttpResponse("Te-ai Logat, boss-ule")
            else:
                context['error'] = 1
                context['error_message'] = 'Wrong username or password!'

        return HttpResponse('Fail')


    def get_user_from_form(self, request):

        user = {}
        try:
            user['email'] = request.POST['email']
            user['password'] = request.POST['password']
            return user

        except:
            return False


@login_required
def home(request):
    return render(request, 'core/home.html')