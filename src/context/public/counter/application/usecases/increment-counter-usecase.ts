import { UpdateCounterStore, updateCounterUseCase } from ".";
import { increment } from "../../domain";


const incrementCounterUseCase = (store: UpdateCounterStore) => {
    return updateCounterUseCase(store, increment)
}

export { incrementCounterUseCase }