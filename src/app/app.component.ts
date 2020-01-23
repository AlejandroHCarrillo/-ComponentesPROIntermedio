import { Component, AfterViewInit, ViewChild, ElementRef, Renderer2, ViewContainerRef, ComponentFactoryResolver, ComponentRef, ChangeDetectorRef, AfterContentInit } from '@angular/core';
import { SimpleAlertViewComponent } from './simple-alert-view/simple-alert-view.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, AfterContentInit {
  
  public isAddTimerVisible: boolean = false;
  public time:number = 0;
  public timers:Array<number> = [];
  
  @ViewChild("timerInput") timeInput: ElementRef;
  @ViewChild("alert", {read:ViewContainerRef}) alertContainer: ViewContainerRef;
  
  public simpleAlert : ComponentRef<SimpleAlertViewComponent> = null;
  
  constructor(private renderer: Renderer2, private resolver: ComponentFactoryResolver ) {
      this.timers = [3, 20, 185];
    }
    
    ngAfterViewInit(): void {
      console.log(this.timeInput);
      this.renderer.setAttribute( this.timeInput.nativeElement, "placeholder", "Ingrese los segundos");
      this.renderer.addClass( this.timeInput.nativeElement, "time-in");
    }
    
    ngAfterContentInit(): void {
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
    // this.alerts.first.show();
    const alertFactory = this.resolver.resolveComponentFactory(SimpleAlertViewComponent);
    this.simpleAlert = this.alertContainer.createComponent(alertFactory);
    
    this.simpleAlert.instance.title = "Game Over";
    this.simpleAlert.instance.message = "El tiempo ha terminado BOOM!!!";
    this.simpleAlert.instance.onDismiss.subscribe(()=>{
      // console.log("Dismissed!!!");
      this.simpleAlert.destroy();
    })
    
    console.log(this.simpleAlert.instance);

    this.simpleAlert.instance.show();
    console.log("showEndTimerAlert");
  }
  
  hideEndTimerAlert(){
    this.isAddTimerVisible = false;
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
