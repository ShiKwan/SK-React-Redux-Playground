import firebase from 'firebase';
import {
    PORTFOLIO_CREATE,
    PORTFOLIOS_FETCH_SUCCESS,
    PORTFOLIO_UPDATE,
} from './types';


export const portfolioUpdate = ({prop, value}) => {
    return{
        type: PORTFOLIO_UPDATE,
        payload : { prop, value }
    }
};

export const createPortfolio = ({ title, language, description, mainImage, thumbnail }) => {
    return (dispatch) => {
        firebase.database().ref(`/portfolio`)
        .push({ title, language, description, mainImage, thumbnail })
        .then( () => {
            dispatch({type : PORTFOLIO_CREATE });
            window.location="/portfolio";

        })
    }
};

export const portfoliosFetch = () => {
    return ( dispatch ) => {
        firebase.database().ref(`/portfolio`)
        .on('value', snapshot => {
            dispatch({ type: PORTFOLIOS_FETCH_SUCCESS, payload : snapshot.val() })
        })
    }
};