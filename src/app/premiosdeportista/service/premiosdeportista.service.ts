import { Injectable } from '@angular/core';
import { restservice } from './../../core/service/rest.service';

import { config } from "./../../config";
@Injectable()
export class PremiosDeportistaService {

    constructor(private restService: restservice) {

    }
    public getEdPremiosDeportistas() {
        return this.restService.get(`${config.api.url}${config.api.premiosdeportista.resource}`);
    }
    public saveEdPremiosDeportista(premiosdeportista: any) {
        return this.restService.post(`${config.api.url}${config.api.premiosdeportista.resource}`, premiosdeportista);
    }

    public getFdiPersonas(){
        return this.restService.get(`${config.api.url}${config.api.persona.resource}`);
    }

    public getFNF() {
        return this.restService.get(`${config.api.url}${config.api.deportista.FindFNF}`);
    }

    public getCompetencias(){
        return this.restService.get(`${config.api.url}${config.api.competencia.resource}`);
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

    public getEdPremiosDeportista(idPremios: number) {
        return this.restService.get(`${config.api.url}${config.api.premiosdeportista.resource}/${idPremios}`);
    }

    public delete(idPremios: any) {
        return this.restService.delete(`${config.api.url}${config.api.premiosdeportista.resource}/${idPremios}`);
    }

}