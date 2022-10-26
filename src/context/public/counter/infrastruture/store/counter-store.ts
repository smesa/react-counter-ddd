import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { rootStateType } from "../../../../core";
import { CounterStore, CounterEntity } from "../../domain";
import { getCounterAction, setCounterAction, updateCounterAction } from "./counter-actions";
import { CounterStoreState } from "./counter-reducer";

const counterSelector = (state: rootStateType) => state.counter;

const useCounterStore = (): CounterStore => { 
    
    const dispatch = useDispatch();

    const { counter, isLoading, isUpdating } = useSelector<
            rootStateType,
            CounterStoreState
        >(counterSelector);
    
    const loadInitialCounter = React.useCallback(
        () => getCounterAction()(dispatch),
        [dispatch]
    );

    const setCounter = React.useCallback(
        (counter: CounterEntity) => setCounterAction(counter)(dispatch),
        [dispatch]
    );

    const updateCounter = React.useCallback(
        (counter: CounterEntity) => updateCounterAction(counter)(dispatch),
        [dispatch]
    );

    return {
        counter,
        isLoading,
        isUpdating,
        loadInitialCounter,
        setCounter,
        updateCounter
    };
    
}

export {useCounterStore};