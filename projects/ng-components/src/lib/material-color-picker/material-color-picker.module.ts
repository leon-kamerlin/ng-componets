import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialColorPickerComponent } from './material-color-picker.component';
import { MatIconModule } from '@angular/material/icon';
import { FlexModule } from '@angular/flex-layout';
import { MatButtonToggleModule } from '@angular/material/button-toggle';


@NgModule({
    declarations: [
        MaterialColorPickerComponent
    ],
    imports: [
        CommonModule,
        MatButtonToggleModule,
        MatIconModule,
        FlexModule
    ],
    exports: [
        MaterialColorPickerComponent
    ]
})
export class MaterialColorPickerModule {
}
