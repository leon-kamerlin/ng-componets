import { Component } from '@angular/core';
import * as Screenfull from 'screenfull';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {



  async fullScreenToggle() {
    if (Screenfull.isEnabled) {
      await Screenfull.toggle();
    }
  }

}
