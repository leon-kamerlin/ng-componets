import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectorView } from 'leon-angular-utils';
import { hours, minutes } from '../index';

@Component({
    selector: 'lib-time-picker',
    templateUrl: './time-picker.component.html',
    styleUrls: ['./time-picker.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => TimePickerComponent),  // replace name as appropriate
            multi: true
        }
    ]
})
export class TimePickerComponent implements ControlValueAccessor {
    onChange: (val: Date) => void;
    onTouch: (val: Date) => void;
    disabled: boolean;
    value: Date;
    hours: SelectorView[];
    minutes: SelectorView[];


    constructor() {
        this.hours = hours;
        this.minutes = minutes;
    }

    registerOnChange(fn: (val: Date) => void) {
        this.onChange = fn;
    }

    registerOnTouched(fn: (val: Date) => void) {
        this.onTouch = fn;
    }

    writeValue(obj: Date): void {
        this.value = obj ? obj : new Date();
    }

    setDisabledState(isDisabled: boolean) {
        this.disabled = isDisabled;
    }

    onHourChange(hour: number) {
        this.value.setHours(hour);
    }

    onMinuteChange(minute: number) {
        this.value.setMinutes(minute);
    }

}
