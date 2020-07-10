import {Injectable} from '@angular/core';
import {restservice} from './../../core/service/rest.service';

import { config } from "./../../config";
@Injectable()
export class CategoriaService{
    
    constructor(private restService:restservice){

    }
    public getFdiCategorias(){
        return this.restService.get(`${config.api.url}${config.api.categoria.resource}`);
    }
    public saveFdiCategoria(categoria:any){
        return this.restService.post(`${config.api.url}${config.api.categoria.resource}`,categoria);
    }

    public getFdiCategoria(categoriaId:number){
        return this.restService.get(`${config.api.url}${config.api.categoria.resource}/${categoriaId}`);
    }

    public delete(categoriaId:any){
        return this.restService.delete(`${config.api.url}${config.api.categoria.resource}/${categoriaId}`);
    }
}