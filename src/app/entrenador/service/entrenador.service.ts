import { Injectable } from '@angular/core';
import { restservice } from './../../core/service/rest.service';

import { config } from "./../../config";
@Injectable()
export class EntrenadorService {

    constructor(private restService: restservice) {

    }
    public getFdiEntrenadors() {
        return this.restService.get(`${config.api.url}${config.api.entrenador.resource}`);
    }
    public saveFdiEntrenador(entrenador: any) {
        return this.restService.post(`${config.api.url}${config.api.entrenador.resource}`, entrenador);
    }

    public saveform(entrenador1: any) {
        return this.restService.post(`${config.api.url}${config.api.entrenador1.resource}`, entrenador1);
    }

    public editar(entrenador: any) {
        return this.restService.post(`${config.api.url}${config.api.entrenador.resource}`, entrenador);
    }

    public getDeportistas(entrenador: any, disciplina: any) {
        return this.restService.get(`${config.api.url}${config.api.deportentre.resource}/listasi/${entrenador}/${disciplina}`);
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

    public getFdiEntrenador(entreId: number) {
        return this.restService.get(`${config.api.url}${config.api.entrenador.resource}/${entreId}`);
    }

    public delete(entreId: any) {
        return this.restService.delete(`${config.api.url}${config.api.entrenador.resource}/${entreId}`);
    }

}