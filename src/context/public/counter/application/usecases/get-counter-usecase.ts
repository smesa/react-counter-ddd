import {  CounterStore } from '../../domain'

type GetCounterStore = Pick<CounterStore, 'loadInitialCounter'>

const getCounterUseCase = (store: GetCounterStore ) => {
    store.loadInitialCounter()
}

export { getCounterUseCase }

