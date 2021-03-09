import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullScreenWrapperComponent } from './full-screen-wrapper.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexModule } from '@angular/flex-layout';


@NgModule({
    declarations: [FullScreenWrapperComponent],
    imports: [
        CommonModule,
        MatIconModule,
        MatButtonModule,
        FlexModule
    ],
    exports: [FullScreenWrapperComponent]
})
export class FullScreenWrapperModule {
}
