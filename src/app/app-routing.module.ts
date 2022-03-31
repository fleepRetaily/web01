import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/auth/register/register.component';
import { InitComponent } from './pages/init/init.component';
RegisterComponent

const routes: Routes = [
  { path: '', component: InitComponent },
  { path: 'registrarse', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
