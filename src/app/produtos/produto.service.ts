import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from './produto';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ProdutosService{

    constructor(private http: HttpClient){}

    protected UrlServiceV1 = environment.api_url;

    obterProdutos() : Observable<Produto[]> {
        return this.http.get<Produto[]>(this.UrlServiceV1 + "produto");
    }
}