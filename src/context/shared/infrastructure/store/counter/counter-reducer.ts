import { AnyAction } from 'redux';
import { CounterStore } from "../../../../public/counter/domain/store";
import * as actionsTypes from './counter-actions-types';

type CounterStoreState = Pick<CounterStore, 'counter' | 'isLoading' | 'isUpdating'>;

const INITIAL_STATE: CounterStoreState = {
    counter: undefined,
    isLoading: false,
    isUpdating: false,
}

const counterReducer = (state: CounterStoreState = INITIAL_STATE, action: AnyAction) => { 

    switch (action.type) { 

        case actionsTypes.GET_COUNTER:
            return { ...state, isLoading: true }
        
        case actionsTypes.GET_COUNTER_SUCCESS:
            return { ...state, counter: action.counter, isLoading: false }
        
        case actionsTypes.SET_COUNTER:
            return { ...state, counter: action.counter }
        
        case actionsTypes.UPDATE_COUNTER:
            return { ...state, isUpdating: true }
        
        case actionsTypes.UPDATE_COUNTER_SUCCESS:
            return { ...state, isUpdating: false }
        
        default:
            return state;

    }

}

export { counterReducer };
export type { CounterStoreState };