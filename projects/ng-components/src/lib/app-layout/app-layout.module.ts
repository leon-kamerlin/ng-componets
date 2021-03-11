import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuModule } from '../menu/menu.module';
import { RouterModule } from '@angular/router';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { HeaderModule } from './components/header/header.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { InnerLayoutComponent } from './components/inner-layout/inner-layout.component';
import { AppLayoutComponent } from './app-layout.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
    declarations: [AppLayoutComponent, InnerLayoutComponent],
    imports: [
        CommonModule,
        MenuModule,
        RouterModule,
        PerfectScrollbarModule,
        HeaderModule,
        MatSidenavModule,
        TranslateModule,
    ],
    exports: [AppLayoutComponent, InnerLayoutComponent]
})
export class AppLayoutModule {
}
