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
import { ListReclamationComponent } from './Components/Reclamation/list-reclamation/list-reclamation.component';
import { AjoutRoleComponent } from './Components/Role/ajout-role/ajout-role.component';
import { ListRoleComponent } from './Components/Role/list-role/list-role.component';
import { ListRolesComponent } from './Components/Role/list-roles/list-roles.component';
import { UpdateRoleComponent } from './Components/Role/update-role/update-role.component';
import { AddTicketComponent } from './Components/Ticket/add-ticket/add-ticket.component';
import { ListTicketsComponent } from './Components/Ticket/list-tickets/list-tickets.component';
import { UpdateTicketComponent } from './Components/Ticket/update-ticket/update-ticket.component';
import { Error404PageComponent } from './Components/Unauthorized/error404-page/error404-page.component';
import { UnauthPageComponent } from './Components/Unauthorized/unauth-page/unauth-page.component';
import { AjoutUserComponent } from './Components/User/ajout-user/ajout-user.component';
import { ListUserComponent } from './Components/User/list-user/list-user.component';
import { UpdateUsersComponent } from './Components/User/update-users/update-users.component';
import { RolesType } from './Role.types';
import { AuthGuardService } from './Services/auth-guard.service';

const routes: Routes = [
{path : '' , redirectTo : '/list-abonnements' , pathMatch : 'full'},
{path : 'list-clients' , component : ListClientsComponent, canActivate:[AuthGuardService], 
data:{roles : [RolesType.ADMIN, RolesType.AGENT_BACKOFFICE]}},
{path : 'ajout-client' , component : AddClientComponent , canActivate:[AuthGuardService], 
data:{roles : [RolesType.ADMIN, RolesType.AGENT_BACKOFFICE]}},
{path : 'update-client/:id' , component : UpdateClientComponent , canActivate:[AuthGuardService], 
data:{roles : [RolesType.ADMIN, RolesType.AGENT_BACKOFFICE]}},
{path : 'list-offres' , component : ListOffreComponent, canActivate:[AuthGuardService], 
data:{roles : [RolesType.ADMIN]}},
{path : 'ajout-offre' , component : AddOffreComponent, canActivate:[AuthGuardService] , 
data:{roles : [RolesType.ADMIN]}},
{path : 'update-offre/:id' , component : UpdateOffreComponent, canActivate:[AuthGuardService] , 
data:{roles : [RolesType.ADMIN]}},
{path : 'list-demandes' , component : ListDemandesComponent, canActivate:[AuthGuardService] , 
data:{roles : [RolesType.ADMIN, RolesType.AGENT_BACKOFFICE]}},
{path : 'ajout-demande' , component : AddDemandesComponent, canActivate:[AuthGuardService],
data:{roles : [RolesType.ADMIN, RolesType.AGENT_BACKOFFICE]}},
{path : 'update-demande/:id' , component : UpdateDemandesComponent, canActivate:[AuthGuardService],
data:{roles : [RolesType.ADMIN, RolesType.AGENT_BACKOFFICE]}},
{path : 'list-modems' , component : ListModemsComponent, canActivate:[AuthGuardService],
data:{roles : [RolesType.ADMIN, RolesType.AGENT_BACKOFFICE]}},
{path : 'ajout-modem' , component : AddModemComponent, canActivate:[AuthGuardService],
data:{roles : [RolesType.ADMIN, RolesType.AGENT_BACKOFFICE]} },
{path : 'list-pdv' , component : ListAgencesComponent, canActivate:[AuthGuardService],
data:{roles : [RolesType.ADMIN]}},
{path : 'ajout-pdv' , component : AddAgenceComponent, canActivate:[AuthGuardService] ,
data:{roles : [RolesType.ADMIN]}},
{path : 'update-pdv/:id' , component : UpdateAgenceComponent, canActivate:[AuthGuardService],
data:{roles : [RolesType.ADMIN]}},
{path : 'list-abonnements' , component : ListAbonnementComponent, canActivate:[AuthGuardService],
data:{roles : [RolesType.ADMIN , RolesType.AGENT_SUPPORT_TECHNIQUE,RolesType.AGENT_BACKOFFICE]}},
{path : 'ajout-abonnement' , component : AddAbonnementComponent, canActivate:[AuthGuardService] ,
data:{roles : [RolesType.ADMIN,RolesType.AGENT_BACKOFFICE]}},
{path : 'update-abonnement/:id' , component : UpdateAbonnementComponent, canActivate:[AuthGuardService],
data:{roles : [RolesType.ADMIN,RolesType.AGENT_BACKOFFICE]}},
{path : 'list-tickets/:idAbonnement' , component : ListTicketsComponent, canActivate:[AuthGuardService],
data:{roles : [RolesType.ADMIN,RolesType.AGENT_SUPPORT_TECHNIQUE]}},
{path : 'ajout-ticket/:idAbonnement' , component : AddTicketComponent, canActivate:[AuthGuardService],
data:{roles : [RolesType.ADMIN ,RolesType.AGENT_SUPPORT_TECHNIQUE]} },
{path : 'update-ticket/:id' , component : UpdateTicketComponent, canActivate:[AuthGuardService],
data:{roles : [RolesType.ADMIN, RolesType.AGENT_SUPPORT_TECHNIQUE]}},
{path : 'login' , component : LoginComponent},
{path : 'logout' , component : LogoutComponent, canActivate:[AuthGuardService]},
{path : 'ajout-role' , component: AjoutRoleComponent , canActivate:[AuthGuardService] ,
data:{roles : [RolesType.ADMIN]}},
{path : 'list-roles' , component : ListRolesComponent ,  canActivate:[AuthGuardService] ,
data:{roles : [RolesType.ADMIN]}},
{path : 'update-role/:id' , component: UpdateRoleComponent , canActivate:[AuthGuardService] ,
data:{roles : [RolesType.ADMIN]}},
{path : 'list-users' , component: ListUserComponent , canActivate:[AuthGuardService] ,
data:{roles : [RolesType.ADMIN]}},
{path : 'ajout-user' , component: AjoutUserComponent , canActivate:[AuthGuardService] ,
data:{roles : [RolesType.ADMIN]}},
{path : 'update-user/:id' , component: UpdateUsersComponent , canActivate:[AuthGuardService] ,
data:{roles : [RolesType.ADMIN]}},
{path : 'list-reclamation' , component: ListReclamationComponent , canActivate:[AuthGuardService] ,
data:{roles : [RolesType.ADMIN]}},
{path : 'unauthorized' , component : UnauthPageComponent , canActivate:[AuthGuardService]},
{path : 'error404' , component : Error404PageComponent},
{path : '**' , redirectTo : '/error404'},


]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
