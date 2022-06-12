import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { LoginComponent } from './security/login/login.component';
import { HomeComponent } from './layout/home/home.component';
//import { AuthenticationComponent } from './authentication/authentication.component';
const routes: Routes = [

  {
    path:'loging',component: LoginComponent,
  },

  {
    path:'',component:LayoutComponent,
  },

  {
    path:'**',redirectTo:'Loging',
  },
];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
