import * as Screenfull from 'screenfull';

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'lib-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    @Output()
    toggleSidenav = new EventEmitter<void>();
    @Output()
    toggleNotificationSidenav = new EventEmitter<void>();

    constructor() {
    }

    async fullScreenToggle() {
        if (Screenfull.isEnabled) {
            await Screenfull.toggle();
        }
    }
}
