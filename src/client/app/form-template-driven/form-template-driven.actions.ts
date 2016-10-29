import { Action } from '@ngrx/store';
import { type } from '../shared/util';
import { Name, Address } from './index';

export const ActionTypes = {
    SUBMIT_FORM: type("[Form Template Driven] Submit Form"),
    SUBMIT_FORM_SUCCESS: type("[Form Template Driven] Submit Form Success"),
};

export class SubmitForm implements Action {
    type = ActionTypes.SUBMIT_FORM;

    constructor(public payload: {
        name: Name,
        address: Address
    }) {}
}

export class SubmitFormSuccess implements Action {
    type = ActionTypes.SUBMIT_FORM_SUCCESS
}

export type Actions = 
    SubmitForm
    | SubmitFormSuccess
    ;