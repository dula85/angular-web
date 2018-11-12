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
  serverCreated = false;
  servers = ['TestServer 1', 'TestServer 2'];

  constructor() {
    setTimeout(() => {
      this.allowServer = true;
    },2000);
   }

  ngOnInit() {
  }

  onServerCreation(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.createServerStatus = 'Server created Name is '+this.serverName;
  }

  onUpdateServer(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
