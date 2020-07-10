import {Injectable} from '@angular/core';
import {restservice} from './../../core/service/rest.service';

import { config } from "./../../config";
@Injectable()
export class CategoriaDisciplinaService{

    
    
    constructor(private restService:restservice){

        

    }
    public getFdiCategoriaDisciplinas(){
        return this.restService.get(`${config.api.url}${config.api.categoriadisciplina.resource}`);
    }
    public getFdiDisciplinas(){
        return this.restService.get(`${config.api.url}${config.api.disciplina.resource}`);
    }
    public getFdiCategorias(){
        return this.restService.get(`${config.api.url}${config.api.categoria.resource}`);
    }
    public saveFdiCategoriaDisciplina(categoriadisciplina:any){
        return this.restService.post(`${config.api.url}${config.api.categoriadisciplina.resource}`,categoriadisciplina);
    }

    public getFdiCategoriaDisciplina(catdisciId:number){
        return this.restService.get(`${config.api.url}${config.api.categoriadisciplina.resource}/${catdisciId}`);
    }

    public delete(catdisciId:any){
        return this.restService.delete(`${config.api.url}${config.api.categoriadisciplina.resource}/${catdisciId}`);
    }


}