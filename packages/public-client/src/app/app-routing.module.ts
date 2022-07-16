import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { MenuComponent } from './components/pages/menu/menu.component';
import { InsideComponent } from './components/pages/inside/inside.component';
import { FindUsComponent } from './components/pages/find-us/find-us.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { 
    path: 'inside',     
    //component: InsideComponent,
    loadChildren: () => import('./components/pages/inside/inside.module').then((module) => module.InsideModule)
  },
  { 
    path: 'menu',
    //component: MenuComponent,
    loadChildren: () => import('./components/pages/menu/menu.module').then((module) => module.MenuModule)
  },
  { 
    path: 'find-us',
    //component: FindUsComponent,
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
