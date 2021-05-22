import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from 'angular-datatables';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListClientsComponent } from './Components/Client/list-clients/list-clients.component';
import { AddClientComponent } from './Components/Client/add-client/add-client.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { UpdateClientComponent } from './Components/Client/update-client/update-client.component';
import { ListOffreComponent } from './Components/Offre/list-offre/list-offre.component';
import { AddOffreComponent } from './Components/Offre/add-offre/add-offre.component';
import { UpdateOffreComponent } from './Components/Offre/update-offre/update-offre.component';
import { ListDemandesComponent } from './Components/Demande_Abonnement/list-demandes/list-demandes.component';
import { AddDemandesComponent } from './Components/Demande_Abonnement/add-demandes/add-demandes.component';
import { UpdateDemandesComponent } from './Components/Demande_Abonnement/update-demandes/update-demandes.component';
import { ListModemsComponent } from './Components/Modem/list-modems/list-modems.component';
import { AddModemComponent } from './Components/Modem/add-modem/add-modem.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { NgbModalModule, NgbModule, NgbToastModule} from '@ng-bootstrap/ng-bootstrap';
import { ToastsContainer } from './Components/Toast-container/toasts-container.component';
import { ListAgencesComponent } from './Components/Agence/list-agences/list-agences.component';
import { AddAgenceComponent } from './Components/Agence/add-agence/add-agence.component';
import { UpdateAgenceComponent } from './Components/Agence/update-agence/update-agence.component';
import { ListRemarquesComponent } from './Components/Remarque/list-remarques/list-remarques.component';
import { AddRemarqueComponent } from './Components/Remarque/add-remarque/add-remarque.component';
import { ListAbonnementComponent } from './Components/Abonnement/list-abonnement/list-abonnement.component';
import { AddAbonnementComponent } from './Components/Abonnement/add-abonnement/add-abonnement.component';
import { UpdateAbonnementComponent } from './Components/Abonnement/update-abonnement/update-abonnement.component';
import { ListTicketsComponent } from './Components/Ticket/list-tickets/list-tickets.component';
import { AddTicketComponent } from './Components/Ticket/add-ticket/add-ticket.component';
import { UpdateTicketComponent } from './Components/Ticket/update-ticket/update-ticket.component';
import { StatisticsComponent } from './Components/statistics/statistics.component';
import { LoginComponent } from './Components/login/login.component';
import { LogoutComponent } from './Components/logout/logout.component';
import { InactivePageComponent } from './Components/inactive-page/inactive-page.component';
import { AjoutRoleComponent } from './Component/ajout-role/ajout-role.component';
import { AjoutUserComponent } from './Component/ajout-user/ajout-user.component';
import { ListUsersComponent } from './Components/User/list-users/list-users.component';
import { UpdateUsersComponent } from './Components/User/update-users/update-users.component';
import { UpdateRoleComponent } from './Components/Role/update-role/update-role.component';
import { ListRoleComponent } from './Components/Role/list-role/list-role.component';


@NgModule({
  declarations: [
    AppComponent,
    ListClientsComponent,
    AddClientComponent,
    SidebarComponent,
    UpdateClientComponent,
    ListOffreComponent,
    AddOffreComponent,
    UpdateOffreComponent,
    ListDemandesComponent,
    AddDemandesComponent,
    UpdateDemandesComponent,
    ListModemsComponent,
    AddModemComponent,
    NavbarComponent,
    ToastsContainer,
    ListAgencesComponent,
    AddAgenceComponent,
    UpdateAgenceComponent,
    ListRemarquesComponent,
    AddRemarqueComponent,
    ListAbonnementComponent,
    AddAbonnementComponent,
    UpdateAbonnementComponent,
    ListTicketsComponent,
    AddTicketComponent,
    UpdateTicketComponent,
    StatisticsComponent,
    LoginComponent,
    LogoutComponent,
    InactivePageComponent,
    AjoutRoleComponent,
    AjoutUserComponent,
    ListUsersComponent,
    UpdateUsersComponent,
    UpdateRoleComponent,
    ListRoleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule,
    FormsModule,
    NgbModule,
    NgbModalModule,
    NgbToastModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
