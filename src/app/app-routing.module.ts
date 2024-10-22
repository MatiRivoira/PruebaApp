import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./views/auth/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./views/auth/register/register.module').then(
        (m) => m.RegisterPageModule
      ),
  },
  {
    path: 'inicio',
    loadChildren: () =>
      import('./views/inicio/inicio.module').then((m) => m.InicioPageModule),
  },
  {
    path: 'splash',
    loadChildren: () =>
      import('./views/splash/splash.module').then((m) => m.SplashPageModule),
  },
  {
    path: 'chat',
    loadChildren: () =>
      import('./views/chat/chat.module').then((m) => m.ChatPageModule),
  },
  {
    path: 'camara',
    loadChildren: () =>
      import('./views/camara/camara.module').then((m) => m.CamaraPageModule),
  },
  {
    path: 'configuracion',
    loadChildren: () =>
      import('./views/configuracion/configuracion.module').then(
        (m) => m.ConfiguracionPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
