import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styles: [`
    .largerThanFive{
      color: white;
    }
  `]
})
export class Assignment3Component implements OnInit {
  hideText = false;
  buttonClicks = [];
  index: number = 0;

  constructor() { }

  ngOnInit() {
  }

  onToggle(event: Event){
    this.hideText = !this.hideText;
    this.buttonClicks.push(this.index);
    this.index = this.index +1;
  }

  getColor(no: number){
    return no > 5 ? 'blue': 'white';
  }

}
