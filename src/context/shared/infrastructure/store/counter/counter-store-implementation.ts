import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CounterEntity, CounterStore } from "../../../../public/counter/domain";
import { rootStateType } from "../root-store";
import { getCounterAction, setCounterAction, updateCounterAction } from './counter-actions';
import { CounterStoreState } from './counter-reducer';


const counterSelector = (state: rootStateType) => state.counter;

const useCounterStore = (): CounterStore => { 

    const dispatch = useDispatch();    

    const { counter, isLoading, isUpdating } = useSelector<
            rootStateType,
            CounterStoreState
        >(counterSelector)
    
    const loadInitialCounter = useCallback(
        () => getCounterAction()(dispatch), [dispatch]
    )

    const setCounter = useCallback(
        (counter: CounterEntity) => setCounterAction(counter)(dispatch), [dispatch]
    )

    const updateCounter = useCallback(
        (counter: CounterEntity) => updateCounterAction(counter)(dispatch), [dispatch]
    )


    return {
        counter,
        isLoading,
        isUpdating,
        loadInitialCounter,
        setCounter,
        updateCounter
    }

}

export { useCounterStore }