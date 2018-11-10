import axios from 'axios';
import { URI, X_CSRF_TOKEN } from './envConfig';

export default axios.create({
    baseURL: URI,
    headers: {
        'X-CSRF-TOKEN': X_CSRF_TOKEN,
        'Content-Type': 'application/json'
    }
});