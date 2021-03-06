import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class MenuService {
    url: string;

    constructor(private router: Router, private translate: TranslateService) {
        const urlArr = this.router.url.split('/');
        urlArr.pop();
        this.url = urlArr.join('/');
    }

    getAll() {
        return [
            {
                link: `${this.url}/dashboard`,
                label: this.translate.instant('dashboard'),
                icon: 'dashboard',
            },
            {
                link: `${this.url}/services`,
                label: this.translate.instant('services'),
                icon: 'dashboard',
            },
            {
                link: `${this.url}/calendar`,
                label: this.translate.instant('calendar'),
                icon: 'calendar_today',
            },
            {
                link: `${this.url}/clients`,
                label: this.translate.instant('clients'),
                icon: 'people',
            },
            {
                link: `${this.url}/staff`,
                label: this.translate.instant('staff'),
                icon: 'people',
            },
        ];
    }

}
