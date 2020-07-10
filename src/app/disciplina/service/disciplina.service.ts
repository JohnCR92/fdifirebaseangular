import {Injectable} from '@angular/core';
import {restservice} from './../../core/service/rest.service';

import { config } from "./../../config";
@Injectable()
export class DisciplinaService{
    
    constructor(private restService:restservice){

    }
    public getFdiDisciplinas(){
        return this.restService.get(`${config.api.url}${config.api.disciplina.resource}`);
    }
    public getEdCamposEntrenamientos(){
        return this.restService.get(`${config.api.url}${config.api.centrenamiento.resource}`);
    }
    public saveFdiDisciplina(disciplina:any){
        return this.restService.post(`${config.api.url}${config.api.disciplina.resource}`,disciplina);
    }

    public getFdiDisciplina(disciplinaId:number){
        return this.restService.get(`${config.api.url}${config.api.disciplina.resource}/${disciplinaId}`);
    }

    public delete(disciplinaId:any){
        return this.restService.delete(`${config.api.url}${config.api.disciplina.resource}/${disciplinaId}`);
    }

}