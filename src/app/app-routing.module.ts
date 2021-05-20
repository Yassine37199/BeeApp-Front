import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAbonnementComponent } from './Components/Abonnement/add-abonnement/add-abonnement.component';
import { ListAbonnementComponent } from './Components/Abonnement/list-abonnement/list-abonnement.component';
import { UpdateAbonnementComponent } from './Components/Abonnement/update-abonnement/update-abonnement.component';
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
import { AddTicketComponent } from './Components/Ticket/add-ticket/add-ticket.component';
import { ListTicketsComponent } from './Components/Ticket/list-tickets/list-tickets.component';
import { UpdateTicketComponent } from './Components/Ticket/update-ticket/update-ticket.component';

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
   {path : 'list-pdv' , component : ListAgencesComponent},
   {path : 'ajout-pdv' , component : AddAgenceComponent },
   {path : 'update-pdv/:id' , component : UpdateAgenceComponent},
   {path : 'list-abonnements' , component : ListAbonnementComponent},
   {path : 'ajout-abonnement' , component : AddAbonnementComponent },
   {path : 'update-abonnement/:id' , component : UpdateAbonnementComponent},
   {path : 'list-tickets/:idAbonnement' , component : ListTicketsComponent},
   {path : 'ajout-ticket/:idAbonnement' , component : AddTicketComponent },
   {path : 'update-ticket/:id' , component : UpdateTicketComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
