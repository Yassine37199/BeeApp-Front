import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAgenceComponent } from './Components/Agence/add-agence/add-agence.component';
import { ListAgencesComponent } from './Components/Agence/list-agences/list-agences.component';
import { UpdateAgenceComponent } from './Components/Agence/update-agence/update-agence.component';
import { AddClientComponent } from './Components/Client/add-client/add-client.component';
import { ListClientsComponent } from './Components/Client/list-clients/list-clients.component';
import { UpdateClientComponent } from './Components/Client/update-client/update-client.component';
import { AddDemandesComponent } from './Components/Demande_Abonnement/add-demandes/add-demandes.component';
import { ListDemandesComponent } from './Components/Demande_Abonnement/list-demandes/list-demandes.component';
import { UpdateDemandesComponent } from './Components/Demande_Abonnement/update-demandes/update-demandes.component';
import { AddModemComponent } from './Components/Modem/add-modem/add-modem.component';
import { ListModemsComponent } from './Components/Modem/list-modems/list-modems.component';
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
   {path : 'list-demandes' , component : ListDemandesComponent},
   {path : 'ajout-demande' , component : AddDemandesComponent },
   {path : 'update-demande/:id' , component : UpdateDemandesComponent},
   {path : 'list-modems' , component : ListModemsComponent},
   {path : 'ajout-modem' , component : AddModemComponent },
   {path : 'list-agences' , component : ListAgencesComponent},
   {path : 'ajout-agence' , component : AddAgenceComponent },
   {path : 'update-agence/:id' , component : UpdateAgenceComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
