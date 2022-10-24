import { CounterEntity } from "../../../domain/entities";
import { create } from "../../../domain";
import httpClient from '../../../../../shared/infrastructure/api/http-client';

const BASE_URL = 'counter';

const get = async (): Promise<CounterEntity> => { 
    const response = await httpClient.get(BASE_URL);
    const { value } = response.data;
    const counter = create(value);
    return counter;
}

const update = async (counter: CounterEntity): Promise<CounterEntity> => {
    const response = await httpClient.put(BASE_URL, counter);
    const { value } = response.data;
    const counterUpdated = create(value);
    return counterUpdated;
}

export { get, update }