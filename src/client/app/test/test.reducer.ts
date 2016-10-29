import * as fromTest from './test.actions';

export interface State {
  value1: string | null;
  value2: string | null;
};

const initialState: State = {
  value1: null,
  value2: null,
};


export function reducer(state = initialState, action: fromTest.Actions): State {

    switch (action.type) {
        case fromTest.ActionTypes.SUBMIT_TEST: {

            let testData = action.payload;

            return Object.assign({}, state, testData)
        } 

        default: {
            return state;
        }
    }

}