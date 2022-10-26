import axios from 'axios';

const httpClient = axios.create({
    baseURL: 'https://us-central1-counter-api-902d0.cloudfunctions.net/',
    headers: {
        'Content-Type': 'application/json',
    },
});


export default httpClient;
