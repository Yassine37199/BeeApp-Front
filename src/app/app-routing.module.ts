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
import { InactivePageComponent } from './Components/inactive-page/inactive-page.component';
import { LoginComponent } from './Components/login/login.component';
import { LogoutComponent } from './Components/logout/logout.component';
import { AddModemComponent } from './Components/Modem/add-modem/add-modem.component';
import { ListModemsComponent } from './Components/Modem/list-modems/list-modems.component';
import { AddOffreComponent } from './Components/Offre/add-offre/add-offre.component';
import { ListOffreComponent } from './Components/Offre/list-offre/list-offre.component';
import { UpdateOffreComponent } from './Components/Offre/update-offre/update-offre.component';
import { AddTicketComponent } from './Components/Ticket/add-ticket/add-ticket.component';
import { ListTicketsComponent } from './Components/Ticket/list-tickets/list-tickets.component';
import { UpdateTicketComponent } from './Components/Ticket/update-ticket/update-ticket.component';
import { AuthGuardService } from './Services/auth-guard.service';

const routeValid = false;
let routess = []

if (routeValid) {
  routess = [];
}



const routes: Routes = [
{path : '' , redirectTo : '/list-clients' , pathMatch : 'full', data : {active : 'active'}},
{path : 'list-clients' , component : ListClientsComponent, canActivate:[AuthGuardService], data : {active : 'active'}},
{path : 'ajout-client' , component : AddClientComponent , canActivate:[AuthGuardService], data : {active : 'active'} },
{path : 'update-client/:id' , component : UpdateClientComponent , canActivate:[AuthGuardService], data : {active : 'active'}},
{path : 'list-offres' , component : ListOffreComponent, canActivate:[AuthGuardService], data : {active : 'active'}},
{path : 'ajout-offre' , component : AddOffreComponent, canActivate:[AuthGuardService] , data : {active : 'active'}},
{path : 'update-offre/:id' , component : UpdateOffreComponent, canActivate:[AuthGuardService] , data : {active : 'active'}},
{path : 'list-demandes' , component : ListDemandesComponent, canActivate:[AuthGuardService] , data : {active : 'active'}},
{path : 'ajout-demande' , component : AddDemandesComponent, canActivate:[AuthGuardService], data : {active : 'active'} },
{path : 'update-demande/:id' , component : UpdateDemandesComponent, canActivate:[AuthGuardService], data : {active : 'active'}},
{path : 'list-modems' , component : ListModemsComponent, canActivate:[AuthGuardService], data : {active : 'active'}},
{path : 'ajout-modem' , component : AddModemComponent, canActivate:[AuthGuardService], data : {active : 'active'} },
{path : 'list-pdv' , component : ListAgencesComponent, canActivate:[AuthGuardService], data : {active : 'active'}},
{path : 'ajout-pdv' , component : AddAgenceComponent, canActivate:[AuthGuardService] , data : {active : 'active'}},
{path : 'update-pdv/:id' , component : UpdateAgenceComponent, canActivate:[AuthGuardService], data : {active : 'active'}},
{path : 'list-abonnements' , component : ListAbonnementComponent, canActivate:[AuthGuardService], data : {active : 'active'}},
{path : 'ajout-abonnement' , component : AddAbonnementComponent, canActivate:[AuthGuardService] , data : {active : 'active'}},
{path : 'update-abonnement/:id' , component : UpdateAbonnementComponent, canActivate:[AuthGuardService], data : {active : 'active'}},
{path : 'list-tickets/:idAbonnement' , component : ListTicketsComponent, canActivate:[AuthGuardService], data : {active : 'active'}},
{path : 'ajout-ticket/:idAbonnement' , component : AddTicketComponent, canActivate:[AuthGuardService], data : {active : 'active'} },
{path : 'update-ticket/:id' , component : UpdateTicketComponent, canActivate:[AuthGuardService], data : {active : 'active'}},
{path : 'login' , component : LoginComponent},
{path : 'logout' , component : LogoutComponent, canActivate:[AuthGuardService]},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
