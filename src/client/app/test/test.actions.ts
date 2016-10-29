import { Action } from '@ngrx/store';
import { type } from '../shared/util';

export const ActionTypes = {
    SUBMIT_TEST: type('[Test] Submit Test'),
    TEST_SUCCESS:   type('[Test] Test Success')
};

export class SubmitTest implements Action {
    type = ActionTypes.SUBMIT_TEST;

    constructor(public payload: {
        value1: string,
        value2: string
    }) {}
}

export class TestSuccess implements Action {
    type = ActionTypes.TEST_SUCCESS
}

export type Actions = 
    SubmitTest
    | TestSuccess
    ;