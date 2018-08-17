import axios from "axios";
import {
    EMAIL_SENT,
    EMAIL_UPDATE,
} from './types';

export const emailUpdate = ( {prop, value}) => {
    return {
        type: EMAIL_UPDATE,
        payload : {prop, value}
    }
};

export function emailSent(values, callback) {
    const request = axios.post('/api/article', values)
                    .then( () => callback());
        return{
            type: EMAIL_SENT,
            payload: request,
        }
};
