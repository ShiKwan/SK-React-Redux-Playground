import {
    ARTICLES_FETCH_SUCCESS,
    ARTICLES_FETCH_FAIL,

} from '../actions/types';

export default (state = null, action) => {
    switch (action.type) {
        case ARTICLES_FETCH_SUCCESS:
            return action.payload;
        case ARTICLES_FETCH_FAIL:
            return action.payload;
        default:
            return state;
    }
};