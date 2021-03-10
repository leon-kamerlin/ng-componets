import { AfterViewInit, Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
    selector: 'lib-delete-button',
    templateUrl: './delete-button.component.html',
    styleUrls: ['./delete-button.component.scss'],
})
export class DeleteButtonComponent implements OnInit, AfterViewInit, OnDestroy {
    private deleteSubject: ReplaySubject<void> = new ReplaySubject<void>();
    canDelete: boolean;

    @Output()
    delete: EventEmitter<void> = new EventEmitter<void>();

    get delete$() {
        return this.deleteSubject.asObservable();
    }

    prepareForDelete() {
        this.canDelete = true;
    }

    cancel() {
        this.canDelete = false;
    }

    deleteBoard() {
        this.deleteSubject.next();
        this.delete.emit();
        this.canDelete = false;
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
    }

    ngOnDestroy() {
        this.deleteSubject.complete();
    }
}
