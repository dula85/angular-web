import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowServer = false;
  createServerStatus = 'No server created !';
  serverName = 'Dula Server';

  constructor() {
    setTimeout(() => {
      this.allowServer = true;
    },2000);
   }

  ngOnInit() {
  }

  onServerCreation(){
    this.createServerStatus = 'Server created Name is '+this.serverName;
  }

  onUpdateServer(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
