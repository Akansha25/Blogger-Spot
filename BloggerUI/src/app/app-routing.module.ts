import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { AddArticleComponent } from './add-article/add-article.component';

//
const routes: Routes = [
  { path : 'home' , component : HomeComponent},
  { path : 'login' , component : LoginComponent},
  { path : 'register' , component : RegisterComponent},
  { path: 'addArticle', component :AddArticleComponent,canActivate:[AuthGuard]},
 { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ onSameUrlNavigation: 'reload'}) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
