import { Injectable } from '@angular/core';
import { restservice } from './../../core/service/rest.service';

import { config } from "./../../config";
@Injectable()
export class DeportistaService {

    constructor(private restService: restservice) {

    }


    public getEdDeportistas() {
        return this.restService.get(`${config.api.url}${config.api.deportista.resource}`);
    }
    public saveEdDeportista(deportista: any) {
        return this.restService.post(`${config.api.url}${config.api.deportista.resource}`, deportista);
    }

    public getFdiPersonas(){
        return this.restService.get(`${config.api.url}${config.api.persona.resource}`);
    }

    public getFdiCategoriaDisciplinas(){
        return this.restService.get(`${config.api.url}${config.api.categoriadisciplina.resource}`);
    }

    public getEdDeportista(deporId: number) {
        return this.restService.get(`${config.api.url}${config.api.deportista.resource}/${deporId}`);
    }

    public delete(deporId: any) {
        return this.restService.delete(`${config.api.url}${config.api.deportista.resource}/${deporId}`);
    }

    public getFNF() {
        return this.restService.get(`${config.api.url}${config.api.deportista.FindFNF}`);
    }
    public getA() {
        return this.restService.get(`${config.api.url}${config.api.deportista.FindA}`);
    }
    public getDB() {
        return this.restService.get(`${config.api.url}${config.api.deportista.FindDB}`);
    }

}