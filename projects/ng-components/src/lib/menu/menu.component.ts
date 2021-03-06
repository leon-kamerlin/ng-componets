import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

import { MenuService } from './menu.service';

@Component({
    selector: 'lib-menu',
    templateUrl: './menu.component.html',
    providers: [MenuService]
})
export class MenuComponent implements OnChanges, OnInit, OnDestroy {
    @Input() direction: string;
    currentLang = 'en';
    menuItems = [];

    config;

    constructor(public menuService: MenuService) {
    }

    ngOnChanges(changes: SimpleChanges) {
        this.config = {
            ...this.config,
            rtlLayout: this.direction === 'rtl'
        };
    }

    ngOnInit() {
        this.menuItems = this.menuService.getAll();

        this.config = {
            paddingAtStart: false,
            interfaceWithRoute: true,
            collapseOnSelect: true,
            highlightOnSelect: true,
            rtlLayout: this.direction === 'rtl',
            selectedListFontColor: '#3f51b5'
        };
    }

    ngOnDestroy() {
    }
}
