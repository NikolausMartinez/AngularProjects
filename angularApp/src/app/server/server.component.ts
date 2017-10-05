import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent implements OnInit{
  serverId: number = 10;
  serverStatus: string = 'offline';
  serverCreationStatus = 'No server was created!';

  allowNewServer = false;

  getServerStatus() {
    return this.serverStatus;
  }

  getServerId() {
    return this.serverId
  }

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit() {

  }
  onCreateServer() {
    this.serverCreationStatus = 'Server was created!';
  }
}
