import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment4',
  templateUrl: './assignment4.component.html',
  styleUrls: ['./assignment4.component.css']
})
export class Assignment4Component implements OnInit {
  inputNumbers = [];
  constructor() { }

  ngOnInit() {
  }

  onGameStart(data: {numberValue: number}){
    this.inputNumbers.push(data.numberValue);
  }

}
