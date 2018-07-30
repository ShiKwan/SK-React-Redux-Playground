import React, { Component } from "react";
import { Link } from 'react-router-dom';
import ArticleList from '../../components/article/articleList';
import ArticleCreate from '../../components/article/articleCreate';
class Article extends Component {

    render() {

        return (
            <div>
                <Link to='/' className='btn btn-default'> &larr; Back to home </Link>
                <h1>Article sections for <b>SK Portfolio</b> development!</h1>
                <ArticleList />
                <h1> Create new article </h1>
                <ArticleCreate />
        
            </div>
        );
    }
};

export default Article;