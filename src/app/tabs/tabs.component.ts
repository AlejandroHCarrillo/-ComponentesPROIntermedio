import { Component, OnInit, ContentChildren, AfterContentInit, OnDestroy, QueryList } from '@angular/core';
import { TabComponent } from "app/tab/tab.component";
import { Tab } from "../tab/tab.interface";


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit, AfterContentInit, OnDestroy {

  // @ContentChild(TabComponent) tab : TabComponent;
  @ContentChildren(TabComponent) public tabs : QueryList<TabComponent>;


  // public tabs:Tab[] = [];
  private tabClickSubscriptions : any[]=[];

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    if (this.tabClickSubscriptions){
      this.tabClickSubscriptions.forEach( item =>  {
        item.unsubscribe(); 
      });
    }
  }
  
  ngAfterContentInit(): void {
    console.log(this.tabs);
    this.tabs.forEach( tab =>{
      let subcription = tab.onClick.subscribe(()=>{
        console.log(`Click detectado ${tab.title}`);
    });
    this.tabClickSubscriptions.push(subcription);
    this.selectTab(this.tabs.first);
  });
    // if(this.tab){
    //   console.log(this.tab);
    //   this.addTab(this.tab);
    //   this.tabClickSubscription = this.tab.onClick.subscribe(()=>{console.log("Click detectado");
    //   });
    // }
  }

  selectTab(tab:Tab) {
    this.tabs.forEach(tab=> tab.isActive = false);
    tab.isActive = true;
  }



  

}
