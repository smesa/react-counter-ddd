import { CounterEntity } from '../entities';

const create = (count: CounterEntity['value']) => ({ value: count })

const decrement = (counter: CounterEntity) => ({
    value: Math.max(counter.value - 1, 0),
})

const increment = (counter: CounterEntity) => ({
    value: counter.value + 1,
})

export { create, decrement, increment }