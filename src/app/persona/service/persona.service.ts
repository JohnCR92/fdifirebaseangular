import {Injectable} from '@angular/core';
import {restservice} from './../../core/service/rest.service';

import { config } from "./../../config";
@Injectable()
export class PersonaService{
    
    constructor(private restService:restservice){

    }
    public getFdiPersonas(){
        return this.restService.get(`${config.api.url}${config.api.persona.resource}`);
    }
    public saveFdiPersona(persona:any){
        return this.restService.post(`${config.api.url}${config.api.persona.resource}`,persona);
    }

    public getFdiPersona(prsId:number){
        return this.restService.get(`${config.api.url}${config.api.persona.resource}/${prsId}`);
    }

    public delete(prsId:any){
        return this.restService.delete(`${config.api.url}${config.api.persona.resource}/${prsId}`);
    }

    public getSriCedula(sriId: any){
        return this.restService.get(`${config.sri.url}${config.sri.sripersona.resource}/${sriId}`);
    
    }
}