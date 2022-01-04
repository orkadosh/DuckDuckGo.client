import { Component, ViewChild } from '@angular/core';
import {SearchService} from './../services/search.service'
import { FormBuilder } from '@angular/forms';
import { MatDrawer } from '@angular/material/sidenav';
import { PageEvent } from '@angular/material/paginator';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DuckDuckGo';
  showFiller = false;
  searchText:string="";
  pageNumber:number=0;
  defaultIcon:string="i/423b26ad.png";

  //paginator 
  length = 100;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  // MatPaginator Output
  pageEvent: PageEvent;


  public searchForm = this.formBuilder.group({
    text: '',
  });
@ViewChild('drawer') drawer : MatDrawer;

  constructor(private formBuilder :FormBuilder, public searchService:SearchService ){
  }
submit(){
  debugger
  let seatchText = this.searchForm.controls["text"].value;
 this.searchService.search(seatchText,this.pageSize);
 this.searchService.searchHistory.unshift(seatchText);
 this.length =this.searchService.links.length;
}
onHistoryClicked(index:number){
  debugger
 this.searchForm.controls.text.setValue(this.searchService.searchHistory[index])
 this.submit();
 this.drawer.toggle();
}
onPageChange($event:any){
debugger
this.searchService.pageNumber= $event.pageIndex;
this.pageSize= $event.pageSize;
this.submit();
}
}
