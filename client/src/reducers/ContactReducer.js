import _ from 'lodash';
import {
    EMAIL_SENT,
    EMAIL_UPDATE
} from '../actions/types';

const INITIAL_STATE = {
    name : null,
    email : null,
    title : null,
    message : null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_SENT:
            return INITIAL_STATE;
        case EMAIL_UPDATE : 
            console.log(state);
            return {
                ...state, [action.payload.prop] : action.payload.value 
            };
        default:
            return state;
    }
};