import React, { Component } from "react";
import { Link } from 'react-router-dom';
import ArticleList from '../../components/article/articleList';
class Article extends Component {

    render() {

        return (
            <div>
                <Link to='/' className='btn btn-default'> &larr; Back to home </Link>
                <h1>Article sections for <b>SK Portfolio</b> development!</h1>
                <ArticleList />
            </div>
        );
    }
};

export default Article;