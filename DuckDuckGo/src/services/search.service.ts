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
  constructor(private http: HttpClient ) { }



  public search(text:string, currentPage:number){
    this.isLoding=true;
    this.http.get(`${environment.testServerPath}Search/?text=${text}&pageNumber=${currentPage}`).subscribe(next=>{
      debugger
this.links=next;
this.isLoding=false;

    },error=>{
debugger
    })

  }
}
