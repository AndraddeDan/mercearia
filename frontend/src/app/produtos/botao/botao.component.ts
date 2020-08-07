import { Component, OnInit } from '@angular/core';

import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-botaoFiltro',
  templateUrl: './botao.component.html',
  styleUrls: ['../../app.component.scss']
})
export class BotaoComponent implements OnInit {

  botoes: Object[] = [
    { "nome":"FRUTAS", "classes" : "botoes__frutas botao" },
    { "nome":"MASSAS", "classes" : "botoes__massas botao" },
    { "nome":"CARNES", "classes" : "botoes__carnes botao" },
    { "nome":"LATICÍNIOS", "classes" : "botoes__laticinios botao" },
    { "nome":"BEBIDAS", "classes" : "botoes__bebidas botao" },
    { "nome":"CEREAIS", "classes" : "botoes__cereais botao" },
    { "nome":"LEGUMINOSAS", "classes" : "botoes__leguminosas botao" }
  ];

  produtosService: ProdutosService;

  constructor(produtosService: ProdutosService) {
    this.produtosService = produtosService;
  }

  ngOnInit() {
  }

  onClickFiltro(filtro: string){
    this.produtosService.filtraProdutos(filtro);
  }

}
