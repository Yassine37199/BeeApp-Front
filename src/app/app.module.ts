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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
