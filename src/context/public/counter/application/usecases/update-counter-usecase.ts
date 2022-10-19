import {CounterStore, CounterEntity} from '../../domain'

type UpdateCounterStore = Pick<CounterStore, 'counter' | 'setCounter' | 'updateCounter'>

const updateCounterUseCase = (
    store: UpdateCounterStore,
    updateBy: (counter: CounterEntity) => CounterEntity
) => {

    const updatedCounter = store.counter 
        ? updateBy(store.counter)
        : store.counter

    if( !updatedCounter || store.counter?.value === updatedCounter.value ) return;

    store.setCounter(updatedCounter)
    store.updateCounter(updatedCounter)
        
}

export { updateCounterUseCase }
export type { UpdateCounterStore }