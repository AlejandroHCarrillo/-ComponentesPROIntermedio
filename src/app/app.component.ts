import { Component, AfterViewInit, ViewChildren, QueryList, ChangeDetectorRef } from '@angular/core';
import { SimpleAlertViewComponent } from './simple-alert-view/simple-alert-view.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  public isAddTimerVisible: boolean = false;
  // public isEndTimerAlertVisible: boolean = false;
  public time:number = 0;
  public timers:Array<number> = [];

  // @ViewChild(SimpleAlertViewComponent) alert: SimpleAlertViewComponent;
  @ViewChildren(SimpleAlertViewComponent) alerts: QueryList<SimpleAlertViewComponent>;

  constructor(private cdRef:ChangeDetectorRef) {
    this.timers = [3, 20, 185];
  }

   ngAfterViewInit(): void {
    this.alerts.forEach( item => { 
      if(!item.title){
        item.title = "aqui va el titulo";
        item.message = "aqui va el mensaje";
      }
    console.log(item);
    // this.alert.show();
    // this.alert.title = "aqui va el titulo";
    // this.alert.message = "aqui va el mensaje";
    });
    this.cdRef.detectChanges();
  }

  showAddTimer(){
    this.isAddTimerVisible = true;
    console.log("Mostrar");
  }
  
  hideAddTimer(){
    this.isAddTimerVisible = false;
    console.log("Esconder");
  }

  showEndTimerAlert(){
    // this.isEndTimerAlertVisible = true;
    // TODO: motrar de algun modo la alerta
    this.alerts.first.show();
    console.log("showEndTimerAlert");
  }
  
  hideEndTimerAlert(){
    // this.isEndTimerAlertVisible = false;
    console.log("hiddeEndTimerAlert");
  }

  logCountdownEnd(){
    console.log("Conteo terminado");
    
  }

  public submitAddTimer(){
    this.timers.push(this.time);
    this.hideAddTimer();
  }

  

}
