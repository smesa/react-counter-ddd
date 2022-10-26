import { get, update } from '../services/data';
import * as actionsTypes from './counter-actions-types';
import { CounterEntity } from '../../domain/entities/counter-entity';

type dispatchProps = { type: string; counter?: CounterEntity }
type dispatchType = (arg:dispatchProps) => void


const getCounterAction = () => async (dispatch: dispatchType) => {
    dispatch({ type: actionsTypes.GET_COUNTER })
    const counter = await get() 
    dispatch({ type: actionsTypes.GET_COUNTER_SUCCESS, counter })
    return counter;
}

const setCounterAction = (counter: CounterEntity) => (dispatch: dispatchType) =>
    dispatch({ type: actionsTypes.SET_COUNTER, counter })


const updateCounterAction = (counter: CounterEntity) => async (dispatch: dispatchType) => {
    dispatch({ type: actionsTypes.UPDATE_COUNTER })
    const response = await update(counter)
    dispatch({ type: actionsTypes.UPDATE_COUNTER_SUCCESS })
    return response;
}


export { getCounterAction, setCounterAction, updateCounterAction };
export type { dispatchProps, dispatchType };
