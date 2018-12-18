import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() startGame = new EventEmitter<{numberValue: number}>();
 
  id:any;
  index:number = 1;

  constructor() { }

  ngOnInit() {
  }

  onStartGame(){
    this.id = setInterval(() =>{
      this.startGame.emit(
        {
          numberValue:this.index++
        });
    }, 1000);
    
  }

  onStopGame(){
    clearInterval(this.id);
  }

}
