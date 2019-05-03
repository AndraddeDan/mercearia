import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ProdutoComponent } from './produto/produto.component';
import { MercadoComponent } from './mercado/mercado.component';
import { ProdutosService } from './produtos.service';
import { BotaoComponent } from './botao/botao.component';

@NgModule({
  declarations: [
    ProdutoComponent,
    MercadoComponent,
    BotaoComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    ProdutoComponent,
    MercadoComponent,
    BotaoComponent
  ],
  providers: [
    ProdutosService
  ]
})
export class ProdutosModule { }
