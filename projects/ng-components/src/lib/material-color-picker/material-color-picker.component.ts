import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatColor } from 'leon-angular-utils';


@Component({
    selector: 'lib-material-color-picker',
    templateUrl: './material-color-picker.component.html',
    styleUrls: ['./material-color-picker.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => MaterialColorPickerComponent),  // replace name as appropriate
            multi: true
        }
    ]
})
export class MaterialColorPickerComponent implements ControlValueAccessor {

    MAT_COLORS: Array<MatColor> = [
        MatColor.RED,
        MatColor.PINK,
        MatColor.PURPLE,
        MatColor.DEEP_PURPLE,
        MatColor.INDIGO,
        MatColor.BLUE,
        MatColor.LIGHT_BLUE,
        MatColor.CYAN,
        MatColor.TEAL,
        MatColor.GREEN,
        MatColor.LIGHT_GREEN,
        MatColor.LIME,
        MatColor.YELLOW,
        MatColor.AMBER,
        MatColor.ORANGE,
        MatColor.DEEP_ORANGE,
        MatColor.BROWN,
        MatColor.GREY,
        MatColor.BLUE_GREY,
    ];

    onChange: (val: MatColor) => void;
    onTouch: (val: MatColor) => void;
    disabled: boolean;
    value: MatColor;

    constructor() {
    }


    registerOnChange(fn: (color: MatColor) => void) {
        this.onChange = fn;
    }

    registerOnTouched(fn: (color: MatColor) => void) {
        this.onTouch = fn;
    }

    setDisabledState(isDisabled: boolean) {
        this.disabled = isDisabled;
    }

    writeValue(color: MatColor) {
        this.value = color ? color : MatColor.PURPLE;
    }


    onChangeColor(color: MatColor) {
        if (color !== undefined) {
            this.writeValue(color);
            this.onChange(this.value);
        }


    }
}
