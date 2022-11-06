import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImcComponent } from './imc/imc.component';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { MenuDeTreinoComponent } from './menu-de-treino/menu-de-treino.component';

const routes: Routes = [
  { path: 'imc', component: ImcComponent },
  { path: 'MenuTreino', component: MenuDeTreinoComponent, },
  { path: 'MenuTreino', component: InitialPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
