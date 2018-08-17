import axios from "axios";
import {
    ARTICLE_CREATE,
    ARTICLE_UPDATE,
    ARTICLES_FETCH_SUCCESS,
    ARTICLES_FETCH_FAIL,
    ARTICLE_FETCH,
    ARTICLE_DELETE,

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

export function createArticle(values, callback) {
    const request = axios.post('/api/article', values)
                    .then( () => callback());
        return{
            type: ARTICLE_CREATE,
            payload: request,
        }
};

export const pickArticle = (id) => {
    const request = axios.get(`/api/article/${id}`);
    return (dispatch) => {
        request.then( (res) => {
            dispatch({
                type : ARTICLE_FETCH,
                payload : res.data,
            })
        })
    }
}

export const deleteArticle =(id, callback ) => {

    const request = axios.delete(`/api/article/${id}`)
                        .then( () => callback());
    return ({
        type: ARTICLE_DELETE,
        payload : id
    })
}
