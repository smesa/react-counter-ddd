import { CounterEntity } from "../entities";

interface CounterStore {

    // state
    counter: CounterEntity | undefined;
    isLoading: boolean;
    isUpdating: boolean;

    // actions
    loadInitialCounter(): Promise<CounterEntity>;
    setCounter(counter: CounterEntity): void;
    updateCounter(counter: CounterEntity): Promise<CounterEntity> | undefined;

}

export type { CounterStore };