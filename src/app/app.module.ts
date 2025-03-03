import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { FormularioComponent } from './formulario/formulario.component';
import { PrincipalComponent } from './principal/principal.component';
import { PieComponent } from './pie/pie.component';
import { GenericListComponent } from './generic-list/generic-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    FormularioComponent,
    PrincipalComponent,
    PieComponent,
    GenericListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
