import { Injectable } from '@angular/core';
import { restservice } from './../../core/service/rest.service';

import { config } from "./../../config";
@Injectable()
export class EntrenadorDisciService {

    constructor(private restService: restservice) {

    }

    public getFdiEntrenadorCatDisciplicas() {
        return this.restService.get(`${config.api.url}${config.api.entrenadordisci.resource}`);
    }
    
    public saveFdiEntrenadorCatDisciplica(entrenadordisci: any) {
        return this.restService.post(`${config.api.url}${config.api.entrenadordisci.resource}`, entrenadordisci);
    }
    public getFdiEntrenadors() {
        return this.restService.get(`${config.api.url}${config.api.entrenador.resource}`);
    }

    public getFdiPersonas(){
        return this.restService.get(`${config.api.url}${config.api.persona.resource}`);
    }

    public getFdiCategoriaDisciplinas(){
        return this.restService.get(`${config.api.url}${config.api.categoriadisciplina.resource}`);
    }

    public getFdiCategorias(){
        return this.restService.get(`${config.api.url}${config.api.categoria.resource}`);
    }

    public getFdiDisciplinas(){
        return this.restService.get(`${config.api.url}${config.api.disciplina.resource}`);
    }

    public getFdiEntrenadorCatDisciplica(idEntCatdis: number) {
        return this.restService.get(`${config.api.url}${config.api.entrenadordisci.resource}/${idEntCatdis}`);
    }

    public delete(idEntCatdis: any) {
        return this.restService.delete(`${config.api.url}${config.api.entrenadordisci.resource}/${idEntCatdis}`);
    }

}