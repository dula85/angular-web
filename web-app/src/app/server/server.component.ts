import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online{
            color: white;
        }`]
})
export class ServerComponent{
    ServerId: number = 10;
    ServerStatus: string = 'Offline';

    constructor(){
        this.ServerStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
    }
    getServerStatus(){
        return this.ServerStatus;
    }

    getColor(){
        return this.ServerStatus === 'Online' ? 'green' : 'red';
    }
}
