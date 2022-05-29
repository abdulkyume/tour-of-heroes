import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { HeroDetailComponent } from './heroes-detail/heroes-detail.component';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'heroform', component: HeroFormComponent},
  { path: 'detail/:id', component: HeroDetailComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
