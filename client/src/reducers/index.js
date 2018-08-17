import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import ArticleReducer from './ArticleReducer';
import PortfolioReducer from './PortfolioReducer';
import ContactReducer from './ContactReducer';


export default combineReducers({
    form: formReducer,
    articles: ArticleReducer,
    portfolios : PortfolioReducer,
    email : ContactReducer
});

