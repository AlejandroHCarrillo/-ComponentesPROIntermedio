import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, destroyPlatform } from '@angular/core';
import { TimerService } from './timer.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  providers: [TimerService]
})
export class TimerComponent implements OnInit, OnDestroy {

  @Output() onComplete = new EventEmitter<void>();
  @Input() init:number = 20;

  private countdownSubcription : Subscription = null;
  // private countdownTimerRef:any = null;
  // public countdown:number = 0;
  // public paused: boolean = true;

  constructor(public timer:TimerService) { }

  ngOnInit(): void {
    this.timer.restartCountdown(this.init);
    this.countdownSubcription = this.timer.countdownEnd$.subscribe(()=>{
      console.log("--Se acabo--");
      this.onComplete.emit();
      
    })
  }

  ngOnDestroy():void{
    this.timer.destroy();
  }


}
