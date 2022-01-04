import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {map} from 'rxjs/operators';
import { JsonPipe } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  public links:any;
  public searchHistory:any[]=[];
 public  isLoding:boolean=false;
  public totalItems: number=0;
  public pageNumber=0;
  constructor(private http: HttpClient ) { }



  public search(text:string,pagesize: number){
    this.isLoding=true;
    if(this.searchHistory&& this.searchHistory.length>0 &&  text!= this.searchHistory[0])
    this.pageNumber=0;
    this.http.get<any>(`${environment.testServerPath}Search/?text=${text}&pageNumber=${this.pageNumber}&pageSize=${pagesize}`).subscribe(next=>{
      debugger
 let response = next;//["value"];
 this.links= response["value"]? response["value"]:null;
 this.totalItems= response["totalItems"]? response["totalItems"]:0;
this.isLoding=false;

    },error=>{
debugger
    })

  }
}
