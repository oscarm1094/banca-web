import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MisProductosComponent} from "./pichincha/pages/mis-productos/mis-productos.component";
import {MisContactosComponent} from "./pichincha/pages/mis-contactos/mis-contactos.component";
import {MiPerfilComponent} from "./pichincha/pages/mi-perfil/mi-perfil.component";
import {PagosComponent} from "./pichincha/pages/pagos/pagos.component";
import {SolicitarProductosComponent} from "./pichincha/pages/solicitar-productos/solicitar-productos.component";
import {TransferenciasComponent} from "./pichincha/pages/transferencias/transferencias.component";
import {ClaveDigitalComponent} from "./pichincha/pages/clave-digital/clave-digital.component";
import {OtrosServiciosComponent} from "./pichincha/pages/otros-servicios/otros-servicios.component";

const routes: Routes = [
  {
    path:'',
    component: MisProductosComponent,
    pathMatch:'full'
  },
  {
    path:'productos',
    component: MisProductosComponent
  },
  {
    path:'contactos',
    component: MisContactosComponent
  },
  {
    path:'perfil',
    component: MiPerfilComponent
  },
  {
    path:'pagos',
    component: PagosComponent
  },
  {
    path:'solicitudes',
    component: SolicitarProductosComponent
  },
  {
    path:'transferencias',
    component: TransferenciasComponent
  },
  {
    path:'claveDigital',
    component: ClaveDigitalComponent
  },
  {
    path:'otrosServicios',
    component: OtrosServiciosComponent
  },
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
