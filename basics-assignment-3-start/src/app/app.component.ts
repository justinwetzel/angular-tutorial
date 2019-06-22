import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showDetails = false;
  shibas = [];
  shibeCounter = 0;

  showDetailsClicked() {
    this.showDetails = true;
    this.shibeCounter++;
    let pushShibe = this.shibeCounter;
    this.shibas.push(pushShibe);
  }
}
