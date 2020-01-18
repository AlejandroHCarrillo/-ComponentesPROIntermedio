import { Component, Input, Output, OnInit, OnChanges} from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: 'display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnChanges{
  ngOnChanges(changes): void {
    if (changes.time){
      const minutes = Math.trunc(changes.time.currentValue/60);
      const seconds = (changes.time.currentValue - (minutes*60));

      this.minutos = ("0"+minutes).substr(-2);
      this.segundos = ("0"+seconds).substr(-2);
    }
  }

  @Input() time:number = null;
  minutos: string="00";
  segundos: string="00";

  constructor() { }



}
