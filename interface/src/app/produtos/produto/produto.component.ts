import { Component } from '@angular/core';
import { text } from '@angular/core/src/render3';

import { ProdutosService } from '../produtos.service';

@Component({
    selector: 'app-produtoCard',
    templateUrl: 'produto.component.html',
    styleUrls: ['../../app.component.scss']
})
export class ProdutoComponent {

    produtos: Object[] = [];
    excluidos: Object[] = [];

    produtosService: ProdutosService;

    constructor(produtosService: ProdutosService) {
        this.produtosService = produtosService;
    }

    ngOnInit(){
        this.listProducts();

        this.produtosService.emitirFiltroClicado.subscribe(
            filtro => this.filtro(filtro.substr(0,2))
        );
    }

    listProducts(){
        this.produtosService.getProdutos().subscribe(produtos => {
            this.produtos = produtos,
            this.formataPerecível(),
            this.formataNomeProduto()
        });
    }

    filtro(sigla){
        this.produtos = [];
        this.produtosService.getProdutos().subscribe(produtos => {
            produtos.forEach(produto => {
                (produto.product_type == sigla) ? this.produtos.push(produto) : this.excluidos.push(produto);
            }),
            this.formataPerecível(),
            this.formataNomeProduto()
        });
    }

    onClickProduto(id: number) {
        this.produtosService.trocaId(id);
    }

    formataPerecível() {
        return this.produtos.forEach(produto => {
            produto.is_perishable = produto.is_perishable.toString().substr(0, 1);
        });
    }

    formataNomeProduto() {
        return this.produtos.forEach(produto => {
            produto.product_name = produto.product_name.toString().substr(0, 11);
        });
    }
}
