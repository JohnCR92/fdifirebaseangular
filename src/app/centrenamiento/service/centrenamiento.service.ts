import {Injectable} from '@angular/core';
import {restservice} from './../../core/service/rest.service';

import { config } from "./../../config";
@Injectable()
export class CentrenamientoService{
    
    constructor(private restService:restservice){

    }
    public getEdCamposEntrenamientos(){
        return this.restService.get(`${config.api.url}${config.api.centrenamiento.resource}`);
    }
    public saveEdCamposEntrenamiento(centrenamiento:any){
        return this.restService.post(`${config.api.url}${config.api.centrenamiento.resource}`,centrenamiento);
    }

    public getEdCamposEntrenamiento(campentreId:number){
        return this.restService.get(`${config.api.url}${config.api.centrenamiento.resource}/${campentreId}`);
    }

    public delete(campentreId:any){
        return this.restService.delete(`${config.api.url}${config.api.centrenamiento.resource}/${campentreId}`);
    }
}