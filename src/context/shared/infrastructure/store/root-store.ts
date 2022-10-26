import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './root-reducer';

const rootStore = configureStore({
    reducer: rootReducer
})

type rootStateType = ReturnType<typeof rootStore.getState>;

export { rootStore }
export type { rootStateType }