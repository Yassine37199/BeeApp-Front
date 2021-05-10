import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClientComponent } from './Components/Client/add-client/add-client.component';
import { ListClientsComponent } from './Components/Client/list-clients/list-clients.component';
import { UpdateClientComponent } from './Components/Client/update-client/update-client.component';
import { AddOffreComponent } from './Components/Offre/add-offre/add-offre.component';
import { ListOffreComponent } from './Components/Offre/list-offre/list-offre.component';
import { UpdateOffreComponent } from './Components/Offre/update-offre/update-offre.component';

const routes: Routes = [
   {path : '' , redirectTo : '/list-clients' , pathMatch : 'full'},
   {path : 'list-clients' , component : ListClientsComponent},
   {path : 'ajout-client' , component : AddClientComponent },
   {path : 'update-client/:id' , component : UpdateClientComponent},
   {path : 'list-offres' , component : ListOffreComponent},
   {path : 'ajout-offre' , component : AddOffreComponent },
   {path : 'update-offre/:id' , component : UpdateOffreComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
