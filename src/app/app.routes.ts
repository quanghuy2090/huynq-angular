import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: ClientLayoutComponent,
    children: [
      { path: '', component: HomepageComponent },
      { path: 'product/:id', component: ProductDetailComponent },
      { path: 'about', component: AboutComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
  { path: 'login', component: LoginComponent },
];
