import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { NgMaterialMultilevelMenuModule } from 'ng-material-multilevel-menu';


@NgModule({
    declarations: [
        MenuComponent
    ],
    imports: [
        CommonModule,
        NgMaterialMultilevelMenuModule
    ],
    exports: [MenuComponent]
})
export class MenuModule {
}
