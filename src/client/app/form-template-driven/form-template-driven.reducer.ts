import * as fromFormTemplateDeriven from './form-template-driven.actions';
import * as fromModel from './form-template-driven.model';

export interface State {
  name: fromModel.Name | null;
  address: fromModel.Address | null;
};

const initialState: State = {
  name: null,
  address:  null,
};


export function reducer(state = initialState, action: fromFormTemplateDeriven.Actions): State {
    switch (action.type) {
        case fromFormTemplateDeriven.ActionTypes.SUBMIT_FORM: {

            let formData: State = {
                name: action.payload.name,
                address: action.payload.address
            };

            return Object.assign({}, state, formData);
        } 

        default: {
            return state;
        }
    }

}