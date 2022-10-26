import { AnyAction } from "redux";
import { CounterStore } from "../../domain/store";
import * as actionTypes from "./counter-actions-types";

type CounterStoreState = Pick<CounterStore, 'counter' | 'isLoading' | 'isUpdating'>;

const INITIAL_STATE: CounterStoreState = {
    counter: undefined,
    isLoading: false,
    isUpdating: false,
}

const counterReducer = (state: CounterStoreState = INITIAL_STATE, action: AnyAction) => { 

    switch (action.type) {
     
        case actionTypes.GET_COUNTER:
            return { ...state, isLoading: true };
        
        case actionTypes.GET_COUNTER_SUCCESS:
            return { ...state, isLoading: false, counter: action.counter };
        
        case actionTypes.SET_COUNTER:
            return { ...state, counter: action.counter };
        
        case actionTypes.UPDATE_COUNTER:
            return { ...state, isUpdating: true };
        
        case actionTypes.UPDATE_COUNTER_SUCCESS:
            return { ...state, isUpdating: false };
        
        default:
            return state;
        
    }

}

export { counterReducer };
export type { CounterStoreState };