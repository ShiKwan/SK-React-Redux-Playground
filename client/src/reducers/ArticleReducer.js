import _ from 'lodash';
import {
    ARTICLES_FETCH_SUCCESS,
    ARTICLES_FETCH_FAIL,
    ARTICLE_FETCH,
    ARTICLE_DELETE,


} from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case ARTICLES_FETCH_SUCCESS:
            return _.mapKeys(action.payload, '_id');
        case ARTICLES_FETCH_FAIL:
            return action.payload;
        case ARTICLE_FETCH :
            return _.mapKeys(action.payload, '_id');
        case ARTICLE_DELETE :
            return _.omit(state, action.payload);
        default:
            return state;
    }
};