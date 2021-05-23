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
import { AjoutRoleComponent } from './Components/Role/ajout-role/ajout-role.component';
import { ListRoleComponent } from './Components/Role/list-role/list-role.component';
import { UpdateRoleComponent } from './Components/Role/update-role/update-role.component';
import { AddTicketComponent } from './Components/Ticket/add-ticket/add-ticket.component';
import { ListTicketsComponent } from './Components/Ticket/list-tickets/list-tickets.component';
import { UpdateTicketComponent } from './Components/Ticket/update-ticket/update-ticket.component';
import { Error404PageComponent } from './Components/Unauthorized/error404-page/error404-page.component';
import { UnauthPageComponent } from './Components/Unauthorized/unauth-page/unauth-page.component';
import { AjoutUserComponent } from './Components/User/ajout-user/ajout-user.component';
import { ListUsersComponent } from './Components/User/list-users/list-users.component';
import { UpdateUsersComponent } from './Components/User/update-users/update-users.component';
import { AuthGuardService } from './Services/auth-guard.service';

const routeValid = false;
let routess = []

if (routeValid) {
  routess = [];
}



const routes: Routes = [
{path : '' , redirectTo : '/list-clients' , pathMatch : 'full'},
{path : 'list-clients' , component : ListClientsComponent, canActivate:[AuthGuardService], data : {}},
{path : 'ajout-client' , component : AddClientComponent , canActivate:[AuthGuardService], data : {} },
{path : 'update-client/:id' , component : UpdateClientComponent , canActivate:[AuthGuardService], data : {}},
{path : 'list-offres' , component : ListOffreComponent, canActivate:[AuthGuardService], data : {}},
{path : 'ajout-offre' , component : AddOffreComponent, canActivate:[AuthGuardService] , data : {}},
{path : 'update-offre/:id' , component : UpdateOffreComponent, canActivate:[AuthGuardService] , data : {}},
{path : 'list-demandes' , component : ListDemandesComponent, canActivate:[AuthGuardService] , data : {}},
{path : 'ajout-demande' , component : AddDemandesComponent, canActivate:[AuthGuardService], data : {} },
{path : 'update-demande/:id' , component : UpdateDemandesComponent, canActivate:[AuthGuardService], data : {}},
{path : 'list-modems' , component : ListModemsComponent, canActivate:[AuthGuardService], data : {}},
{path : 'ajout-modem' , component : AddModemComponent, canActivate:[AuthGuardService], data : {} },
{path : 'list-pdv' , component : ListAgencesComponent, canActivate:[AuthGuardService], data : {}},
{path : 'ajout-pdv' , component : AddAgenceComponent, canActivate:[AuthGuardService] , data : {}},
{path : 'update-pdv/:id' , component : UpdateAgenceComponent, canActivate:[AuthGuardService], data : {}},
{path : 'list-abonnements' , component : ListAbonnementComponent, canActivate:[AuthGuardService], data : {}},
{path : 'ajout-abonnement' , component : AddAbonnementComponent, canActivate:[AuthGuardService] , data : {}},
{path : 'update-abonnement/:id' , component : UpdateAbonnementComponent, canActivate:[AuthGuardService], data : {}},
{path : 'list-tickets/:idAbonnement' , component : ListTicketsComponent, canActivate:[AuthGuardService], data : {}},
{path : 'ajout-ticket/:idAbonnement' , component : AddTicketComponent, canActivate:[AuthGuardService], data : {} },
{path : 'update-ticket/:id' , component : UpdateTicketComponent, canActivate:[AuthGuardService], data : {}},
{path : 'login' , component : LoginComponent},
{path : 'logout' , component : LogoutComponent, canActivate:[AuthGuardService]},
{path : 'ajout-role' , component: AjoutRoleComponent , canActivate:[AuthGuardService] , data:{roles : ['admin']}},
{path : 'list-roles' , component : ListRoleComponent ,  canActivate:[AuthGuardService] , data:{roles : ['admin']}},
{path : 'update-role' , component: UpdateRoleComponent , canActivate:[AuthGuardService] , data:{roles : ['admin']}},
{path : 'list-users' , component: ListUsersComponent , canActivate:[AuthGuardService] , data:{roles : ['admin']}},
{path : 'ajout-user' , component: AjoutUserComponent , canActivate:[AuthGuardService] , data:{roles : ['admin']}},
{path : 'update-user' , component: UpdateUsersComponent , canActivate:[AuthGuardService] , data:{roles : ['admin']}},
{path : 'unauthorized' , component : UnauthPageComponent , canActivate:[AuthGuardService]},
{path : 'error404' , component : Error404PageComponent},
{path : '**' , redirectTo : '/error404'},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
