import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import ArticleReducer from './ArticleReducer';


export default combineReducers({
    form: formReducer,
    articles: ArticleReducer,
});

