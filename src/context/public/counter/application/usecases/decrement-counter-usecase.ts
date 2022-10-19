import { UpdateCounterStore, updateCounterUseCase } from ".";
import { decrement } from "../../domain";


const decrementCounterUseCase = (store: UpdateCounterStore) => { 
    return updateCounterUseCase(store, decrement)
}

export { decrementCounterUseCase }