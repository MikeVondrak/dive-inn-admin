import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/services/guard/auth.guard';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    component: AdminPageComponent,
  },
  { path: 'flickr-albums', loadChildren: () => import('./features/flickr-albums/flickr-albums.module').then(m => m.FlickrAlbumsModule) },
  { path: 'albums', loadChildren: () => import('./features/albums/albums.module').then(m => m.AlbumsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}