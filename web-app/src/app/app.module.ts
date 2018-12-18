import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from 'src/app/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningComponent } from 'src/app/warning/warning.component';
import { SuccessComponent } from './success/success.component';
import { Assignment2Component } from './assignment2/assignment2.component';
import { Assignment3Component } from './assignment3/assignment3.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { Assignment4Component } from './assignment4/assignment4.component';
import { GameControlComponent } from './assignment4/game-control/game-control.component';
import { OddNumbersComponent } from './assignment4/odd-numbers/odd-numbers.component';
import { EvenNumbersComponent } from './assignment4/even-numbers/even-numbers.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningComponent,
    SuccessComponent,
    Assignment2Component,
    Assignment3Component,
    CockpitComponent,
    ServerElementComponent,
    Assignment4Component,
    GameControlComponent,
    OddNumbersComponent,
    EvenNumbersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
