import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { TimerService } from './timer.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  providers: [TimerService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimerComponent implements OnInit, OnDestroy {

  @Output() onComplete = new EventEmitter<void>();
  @Input() init:number = 20;

  private countdownEndSubcription : Subscription = null;
  private countdownSubcription : Subscription = null;
  public countdown:number = 0;

  // private countdownTimerRef:any = null;
  // public paused: boolean = true;

  constructor(public timer:TimerService, private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.timer.restartCountdown(this.init);
    this.countdownEndSubcription = this.timer.countdownEnd$.subscribe(()=>{
      console.log("--Se acabo--");
      this.onComplete.emit();
    })
    this.countdownSubcription = this.timer.countdown$
    .subscribe((data)=>{ 
      this.countdown = data; 
      this.cdRef.markForCheck();
    });
  }

  ngOnDestroy():void{
    this.timer.destroy();
    this.countdownEndSubcription.unsubscribe();
    this.countdownSubcription.unsubscribe();
  }


}
