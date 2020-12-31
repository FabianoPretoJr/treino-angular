import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF, registerLocaleData } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { VitrineLojaComponent } from './produtos/vitrine-loja/vitrine-loja.component';
import { rootRouterConfig } from './app.routes';
import { LoginComponent } from './user/login/login.component';
import { CadastroComponent } from './user/cadastro/cadastro.component';
import { ProdutosService } from './produtos/produto.service';

import localePt from '@angular/common/locales/pt';
import { ClientesComponent } from './clientes/clientes.component';
import { FornecedoresComponent } from './fornecedores/fornecedores.component';
import { VendasComponent } from './vendas/vendas.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuComponent,
    VitrineLojaComponent,
    LoginComponent,
    CadastroComponent,
    ClientesComponent,
    FornecedoresComponent,
    VendasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    [RouterModule.forRoot(rootRouterConfig, { useHash: false })]
  ],
  providers: [
    ProdutosService,
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
