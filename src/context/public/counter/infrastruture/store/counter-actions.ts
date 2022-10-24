import { CounterEntity } from '../../domain/entities/counter-entity';
import * as actionsTypes from './counter-actions-types';


const getCounterAction = () => (dispatch: any) => {
    dispatch({ type: actionsTypes.GET_COUNTER })
    // get service counter
}

     

