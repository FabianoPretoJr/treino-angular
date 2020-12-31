import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Credencial } from './credencial';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class clienteService {
    constructor(private http: HttpClient) {}

    private UrlServiceV1 = environment.api_url;

    realizarLogin(credenciais : Credencial) {
        var token = this.http.post(this.UrlServiceV1 + "cliente", credenciais);
    }
}