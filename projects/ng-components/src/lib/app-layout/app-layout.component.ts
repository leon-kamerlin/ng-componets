import { Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BreakpointObserver } from '@angular/cdk/layout';

const SMALL_WIDTH_BREAKPOINT = 960;

@Component({
    selector: 'lib-layout',
    templateUrl: './app-layout.component.html',
    styleUrls: ['./app-layout.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AppLayoutComponent {
    isScreenSmall: Observable<boolean>;

    constructor(public breakpoints: BreakpointObserver) {
        this.isScreenSmall = breakpoints
            .observe(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`)
            .pipe(map(breakpoint => breakpoint.matches));
    }
}
