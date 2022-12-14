import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './header/login/login.component';
import { NavbarComponent } from './header/navbar/navbar.component';

const routes: Routes = [
  { path: '', component: NavbarComponent },
  { path: 'login',  component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
