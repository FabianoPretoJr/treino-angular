import { Routes } from '@angular/router';
import { VitrineLojaComponent } from './produtos/vitrine-loja/vitrine-loja.component';
import { LoginComponent } from './user/login/login.component';
import { ClientesComponent } from './clientes/clientes.component';
import { FornecedoresComponent } from './fornecedores/fornecedores.component';
import { VendasComponent } from './vendas/vendas.component';

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/produtos', pathMatch: 'full' },
    { path: 'produtos', component: VitrineLojaComponent},
    { path: 'login', component: LoginComponent },
    { path: 'clientes', component: ClientesComponent },
    { path: 'fornecedores', component: FornecedoresComponent },
    { path: 'vendas', component: VendasComponent }
];