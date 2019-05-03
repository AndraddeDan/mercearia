import { Component, OnInit } from "@angular/core";
import { text } from '@angular/core/src/render3';

import { ProdutosService } from '../produtos.service';

@Component({
    selector: 'app-mercadoLine',
    templateUrl: 'mercado.component.html',
    styleUrls: ['../../app.component.scss']
})
export class MercadoComponent implements OnInit {

    stores: Object[] = [];

    produtosService: ProdutosService;

    constructor(produtosService: ProdutosService) {
        this.produtosService = produtosService;
    }

    ngOnInit() {
        this.produtosService.emitirIdClicado.subscribe(
            id => this.listStores(id)
        );

        this.listStores(1);
    }

    listStores(id){
        this.produtosService.getInfoProduto(id).subscribe(info => {
            this.stores = info,
            this.stores.forEach(store => {
                store.largura = store.quantity_in_store * 100;
            })
        });
    }
}
