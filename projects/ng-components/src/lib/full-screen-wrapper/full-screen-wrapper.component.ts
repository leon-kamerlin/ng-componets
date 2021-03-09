import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'lib-full-screen-wrapper',
    templateUrl: './full-screen-wrapper.component.html',
    styleUrls: ['./full-screen-wrapper.component.scss']
})
export class FullScreenWrapperComponent implements OnInit {

    @Input()
    title: string;
    @Input()
    subtitle: string;
    @Input()
    showBackIcon = true;
    @Input()
    showCloseIcon = true;
    @Output()
    backClick: EventEmitter<void> = new EventEmitter<void>();
    @Output()
    closeClick: EventEmitter<void> = new EventEmitter<void>();

    constructor() {
    }

    ngOnInit() {
    }

}
