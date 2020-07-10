import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {AlertasService} from './alertas.service';
@Injectable()
export class restservice{
    private httpHeaders= new HttpHeaders({'Content-Type':'application/json'});
    constructor(private httpClient:HttpClient){

    }
public get(url:string){
    return this.httpClient.get(url,{headers: this.httpHeaders,withCredentials:true});
}
public post(url: string, object: any){
    return this.httpClient.post(url, JSON.stringify(object),{headers:this.httpHeaders});
}
public delete(url: string){
    return this.httpClient.delete(url, {headers:this.httpHeaders});
}

}