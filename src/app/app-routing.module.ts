import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule),
    canLoad: [ AuthGuard ]
  },

  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },

  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then(m => m.InicioPageModule)
  },

  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },

  {
    path: 'restore',
    loadChildren: () => import('./pages/restore/restore.module').then(m => m.RestorePageModule)
  },
  {
    path: 'conductor',
    loadChildren: () => import('./pages/conductor/conductor.module').then(m => m.ConductorPageModule),
    canLoad: [ AuthGuard ]
  },
  {
    path: 'pasajero',
    loadChildren: () => import('./pages/pasajero/pasajero.module').then(m => m.PasajeroPageModule),
    canLoad: [ AuthGuard ]
  },
  
  {
    path: '**',
    loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
