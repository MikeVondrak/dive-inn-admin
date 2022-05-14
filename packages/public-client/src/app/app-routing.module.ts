import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { 
    path: 'inside',     
    loadChildren: () => import('./components/pages/inside/inside.module').then((module) => module.InsideModule)
  },
  { 
    path: 'menu',
    loadChildren: () => import('./components/pages/menu/menu.module').then((module) => module.MenuModule)
  },
  { 
    path: 'find-us',
    loadChildren: () => import('./components/pages/find-us/find-us.module').then((module) => module.FindUsModule)
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
