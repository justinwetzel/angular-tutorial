import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  username: string = "";

  ngOnInit() {
  }
  
  resetUsername() {
    this.username = "";
  }
}
