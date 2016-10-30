import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { State } from '../shared/store';
import { Name, Address } from './index';
import { SubmitForm } from './form-template-driven.actions';

@Component({
    moduleId: module.id,
    selector: 'form-template-driven',
    templateUrl: 'form-template-driven.component.html',
    styleUrls: ['form-template-driven.component.css'],
})
export class FormTemplateDrivenComponent {

    address$: Observable<Address>;
    name$: Observable<Name>;

    constructor(
        private store: Store<State>) {

            this.name$ = store.select(s => s.formTemplateDriven.name);
            this.address$ = store.select(s => s.formTemplateDriven.address);
    }

    logForm(value: any) {
        console.log('logForm = ',value);
        this.store.dispatch(new SubmitForm(value));
    }
}