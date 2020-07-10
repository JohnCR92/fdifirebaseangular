import {Injectable} from '@angular/core';
import {restservice} from './../../core/service/rest.service';

import { config } from "./../../config";
@Injectable()
export class CompetenciaService{
    
    constructor(private restService:restservice){

    }
    public getCompetencias(){
        return this.restService.get(`${config.api.url}${config.api.competencia.resource}`);
    }
    public saveCompetencia(competencia:any){
        return this.restService.post(`${config.api.url}${config.api.competencia.resource}`,competencia);
    }

    public getCompetencia(idCompetencia:number){
        return this.restService.get(`${config.api.url}${config.api.competencia.resource}/${idCompetencia}`);
    }

    public delete(idCompetencia:any){
        return this.restService.delete(`${config.api.url}${config.api.competencia.resource}/${idCompetencia}`);
    }
}