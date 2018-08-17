import React , { Component } from 'react'; 
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { articleFetch } from '../../actions/ArticleActions';

class articleList extends Component {
    componentWillMount(){
        this.props.articleFetch() ;
    }

    renderRow() {
        console.log("Articles : " , this.props.articles);
        return _.map(this.props.articles, article => {
            return (
                    <li className='list-group-item' key={article._id}>
                        <ul>
                            <li> 
                                Title :
                                <Link to={`/article/${article._id}`}>
                                    {article.title } 
                                </Link>
                            </li>
                            <li> Category : {article.category} </li>
                            <li> Content : {article.content} </li>
                        </ul>
                        
                    </li>
            )
        })
    }
    render(){
        return(
            <div>
                <h1>Article list</h1>
                {this.renderRow(this.props.articles)}
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(state);
    /* const articles = _.map(state.articles, (val) => {
        return {...val };
    }); */
    return { articles : state.articles }
}

export default connect(mapStateToProps, {articleFetch} )(articleList);