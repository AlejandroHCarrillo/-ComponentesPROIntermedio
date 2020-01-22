import { Component, AfterViewInit, ViewChild, ViewChildren, QueryList, ChangeDetectorRef, ElementRef, Renderer2 } from '@angular/core';
import { SimpleAlertViewComponent } from './simple-alert-view/simple-alert-view.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  public isAddTimerVisible: boolean = false;
  public time:number = 0;
  public timers:Array<number> = [];

  @ViewChildren(SimpleAlertViewComponent) alerts: QueryList<SimpleAlertViewComponent>;
  @ViewChild("timerInput") timeInput: ElementRef;

  constructor(private cdRef:ChangeDetectorRef, private renderer: Renderer2 ) {
    this.timers = [3, 20, 185];
  }

   ngAfterViewInit(): void {
    console.log(this.timeInput);

    this.renderer.setAttribute( this.timeInput.nativeElement, "placeholder", "Ingrese los segundos");
    this.renderer.addClass( this.timeInput.nativeElement, "time-in");
    
    this.alerts.forEach( item => { 
      if(!item.title){
        item.title = "aqui va el titulo";
        item.message = "aqui va el mensaje";
      }
      console.log(item);
    });
    this.cdRef.detectChanges();
  }

  showAddTimer(){
    this.isAddTimerVisible = true;
    setTimeout(()=>{
      this.renderer.selectRootElement( this.timeInput.nativeElement).focus();
    })
    console.log("Mostrar");
  }
  
  hideAddTimer(){
    this.isAddTimerVisible = false;
    console.log("Esconder");
  }

  showEndTimerAlert(){
    this.alerts.first.show();
    console.log("showEndTimerAlert");
  }
  
  hideEndTimerAlert(){
    console.log("hiddeEndTimerAlert");
  }

  logCountdownEnd(){
    console.log("Conteo terminado");
    
  }

  submitAddTimer(){
    this.timers.push(this.time);
    this.hideAddTimer();
  }

}
