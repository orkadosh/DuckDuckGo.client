import { Component, ViewChild } from '@angular/core';
import {SearchService} from './../services/search.service'
import { FormBuilder } from '@angular/forms';
import { MatDrawer } from '@angular/material/sidenav';
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
  public searchForm = this.formBuilder.group({
    text: '',
  });
@ViewChild('drawer') drawer : MatDrawer;

  constructor(private formBuilder :FormBuilder, public searchService:SearchService ){

  }
submit(){
  debugger
  let seatchText = this.searchForm.controls["text"].value;
 this.searchService.search(seatchText,this.pageNumber);
 this.searchService.searchHistory.unshift(seatchText);
}
onHistoryClicked(index:number){
  debugger
 this.searchForm.controls.text.setValue(this.searchService.searchHistory[index])
 this.submit();
 this.drawer.toggle();
}
}
