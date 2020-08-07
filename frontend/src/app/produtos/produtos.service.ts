import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { identifierModuleUrl } from '@angular/compiler';

const API = 'http://ibureau.herokuapp.com'

@Injectable({providedIn:'root'})
export class ProdutosService {

    emitirIdClicado = new EventEmitter<number>();
    emitirFiltroClicado = new EventEmitter<string>();

    constructor(private http: HttpClient) {}

    getProdutos() {
        return this.http.get<any[]>(API + '/products');
    }

    getInfoProduto(id: number) {
        return this.http.get<any[]>(API + '/products/' + id);
    }

    trocaId(id: number) {
        this.emitirIdClicado.emit(id);
    }

    filtraProdutos(filtro: string) {
        this.emitirFiltroClicado.emit(filtro);
    }
}
