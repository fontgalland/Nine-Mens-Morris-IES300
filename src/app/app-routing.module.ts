import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'menu', component: MenuPrincipalComponent, pathMatch: 'full'},
  { path: 'login', component: LoginPageComponent, pathMatch: 'full' },
  { path: 'cadastro', component: LoginPageComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
