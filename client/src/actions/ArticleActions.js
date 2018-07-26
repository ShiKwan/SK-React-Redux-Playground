import axios from "axios";
import {
    ARTICLE_CREATE,
    ARTICLE_UPDATE,
    ARTICLES_FETCH_SUCCESS,
    ARTICLES_FETCH_FAIL,

} from './types';


export const articleFetch = () => {
    const request = axios.get('/api/article');
    return (dispatch) => {
        request.then((res) => {
            dispatch({type : ARTICLES_FETCH_SUCCESS, 
                        payload: res.data})
        });
    }
};