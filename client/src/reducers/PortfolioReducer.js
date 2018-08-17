import _ from 'lodash';
import {
    PORTFOLIO_CREATE,
    PORTFOLIO_UPDATE,
    PORTFOLIOS_FETCH_SUCCESS,
    PORTFOLIOS_FETCH_FAIL,
    PORTFOLIO_FETCH,
    PORTFOLIO_DELETE,

} from '../actions/types';

import firebase from 'firebase';
const INITIAL_STATE = {
    title : null,
    language : null,
    description : null,
    mainImage : null,
    thumbnail : null
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PORTFOLIOS_FETCH_SUCCESS:
            return action.payload;
        case PORTFOLIO_CREATE : 
            return INITIAL_STATE;
        default:
            return state;
    }
};