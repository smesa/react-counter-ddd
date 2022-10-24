import { CounterEntity, create } from '../../../domain';
import httpClient from '../../../../../shared/application/api/http-client';

const BASE_URL = 'https://us-central1-counter-api-902d0.cloudfunctions.net';

const get = async (): Promise<CounterEntity> => { 
    return httpClient.get(`${BASE_URL}/counter`).then((response) => {
        const { value } = response.data;
        return create(value); 
    });
}

const update = async (counter: CounterEntity): Promise<CounterEntity> => {
    return httpClient.put(`${BASE_URL}/counter`, { value: counter.value }).then((response) => {
        const { value } = response.data;
        return create(value); 
    });
}

export { get, update };