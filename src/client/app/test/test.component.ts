import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { SubmitTest } from './test.actions';

import { State } from '../shared/store';

@Component({
    moduleId: module.id,
    selector: 'sd-test',
    templateUrl: 'test.component.html'
})
export class TestComponent {

    value1$: Observable<string>;
    value2$: Observable<string>;

    constructor(
        private store: Store<State>) {

        this.value1$ = store.select(s => s.test.value1);
        this.value2$ = store.select(s => s.test.value2);
    }

    testSubmit(data: any) {
        this.store.dispatch(new SubmitTest(data));
    }
}