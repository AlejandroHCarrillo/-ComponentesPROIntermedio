import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isAddTimerVisible: boolean = false;
  public isEndTimerAlertVisible: boolean = false;
  public time:number = 0;
  public timers:Array<number> = [];

  constructor() {
    this.timers = [3, 20, 185];

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
