import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { Tab } from "./tab.interface";
// import { TabsComponent } from 'app/tabs/tabs.component';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();
  @Input() title:string;
  public isActive:boolean = false;
  
  // constructor(public tabs: TabsComponent) { }
  constructor() { }
  
  ngOnInit() {
    // this.tabs.addTab(this);
  }

  clickTabContent(){
    this.onClick.emit();
  }
}
