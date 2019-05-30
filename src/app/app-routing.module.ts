import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SobreComponent } from './sobre/sobre.component';
import { ContatoComponent } from './contato/contato.component';

const routes: Routes = [
  {path:'',component:SobreComponent},
  {path:'sobre',component:SobreComponent},
  {path:'contatos',component:ContatoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
