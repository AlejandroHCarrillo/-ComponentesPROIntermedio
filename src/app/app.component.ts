import { Component, ViewChild, AfterContentInit } from '@angular/core';
import { SimpleAlertViewComponent } from './simple-alert-view/simple-alert-view.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit {

  public isAddTimerVisible: boolean = false;
  public isEndTimerAlertVisible: boolean = false;
  public time:number = 0;
  public timers:Array<number> = [];

  @ViewChild(SimpleAlertViewComponent) alert: SimpleAlertViewComponent;

  constructor() {
    this.timers = [3, 20, 185];

   }

   ngAfterContentInit(): void {
    console.log(this.alert);
    this.alert.show();
    this.alert.title = "aqui va el titulo";
    this.alert.message = "aqui va el mensaje";
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
    this.isEndTimerAlertVisible = true;
    console.log("showEndTimerAlert");
  }
  
  hideEndTimerAlert(){
    this.isEndTimerAlertVisible = false;
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
