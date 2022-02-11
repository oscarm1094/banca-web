import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MisProductosComponent } from './pages/mis-productos/mis-productos.component';
import { TransferenciasComponent } from './pages/transferencias/transferencias.component';
import { PagosComponent } from './pages/pagos/pagos.component';
import { SolicitarProductosComponent } from './pages/solicitar-productos/solicitar-productos.component';
import { OtrosServiciosComponent } from './pages/otros-servicios/otros-servicios.component';
import { MisContactosComponent } from './pages/mis-contactos/mis-contactos.component';
import { MiPerfilComponent } from './pages/mi-perfil/mi-perfil.component';
import { ClaveDigitalComponent } from './pages/clave-digital/clave-digital.component';



@NgModule({
  declarations: [
    MisProductosComponent,
    TransferenciasComponent,
    PagosComponent,
    SolicitarProductosComponent,
    OtrosServiciosComponent,
    MisContactosComponent,
    MiPerfilComponent,
    ClaveDigitalComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PichinchaModule { }
