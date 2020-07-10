import {Injectable} from '@angular/core';
import {restservice} from './../../core/service/rest.service';

import { config } from "./../../config";
@Injectable()
export class DeportEntreService{

    
    
    constructor(private restService:restservice){

        

    }
    public getEdDeportistaEntrenadors(){
        return this.restService.get(`${config.api.url}${config.api.deportentre.resource}`);
    }
    public getFdiDisciplinas(){
        return this.restService.get(`${config.api.url}${config.api.disciplina.resource}`);
    }
    public getFdiCategorias(){
        return this.restService.get(`${config.api.url}${config.api.categoria.resource}`);
    }
    public getFdiCategoriaDisciplinas(){
        return this.restService.get(`${config.api.url}${config.api.categoriadisciplina.resource}`);
    }
    public getFdiEntrenadors() {
        return this.restService.get(`${config.api.url}${config.api.entrenador.resource}`);
    }
    public getFdiEntrenadorCatDisciplicas() {
        return this.restService.get(`${config.api.url}${config.api.entrenadordisci.resource}`);
    }
    public getFNF() {
        return this.restService.get(`${config.api.url}${config.api.deportista.FindFNF}`);
    }
    public saveEdDeportistaEntrenador(deportistaentrenador:any){
        return this.restService.post(`${config.api.url}${config.api.deportentre.resource}`,deportistaentrenador);
    }

    public getEdDeportistaEntrenador(idDepEntre:number){
        return this.restService.get(`${config.api.url}${config.api.deportentre.resource}/${idDepEntre}`);
    }

    public delete(idDepEntre:any){
        return this.restService.delete(`${config.api.url}${config.api.deportentre.resource}/${idDepEntre}`);
    }


}