import React from "react";
import { decrementCounterUseCase, getCounterUseCase, incrementCounterUseCase } from "../../application/usecases";
import { CounterStore } from "../../domain/store";


const useCounterController = (store: CounterStore) => { 
     
    const get = React.useCallback(
        () => {
            getCounterUseCase({
                loadInitialCounter: store.loadInitialCounter
            })
        }, [store.loadInitialCounter]
    )

    const increment = React.useCallback(
        () => {
            incrementCounterUseCase({
                counter: store.counter,
                setCounter: store.setCounter,
                updateCounter: store.updateCounter
            })
        }, [store.counter, store.setCounter, store.updateCounter]
    )

    const decrement = React.useCallback(
        () => {
            decrementCounterUseCase({
                counter: store.counter,
                setCounter: store.setCounter,
                updateCounter: store.updateCounter
            })
        }, [store.counter, store.setCounter, store.updateCounter]
    )


    return {
        count: store.counter,
        isLoading: store.isLoading,
        canDecrement: store.counter?.value === 0,
        get,
        increment,
        decrement
    }
}

export { useCounterController }