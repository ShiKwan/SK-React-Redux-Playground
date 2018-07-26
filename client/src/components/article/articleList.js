import React , { Component } from 'react'; 
import { connect } from 'react-redux';
import _ from 'lodash';
import { articleFetch } from '../../actions/ArticleActions';

class articleList extends Component {
    componentWillMount(){
        this.props.articleFetch() ;
    }

    renderRow(article) {
        console.log("Articles : " , article);
        return _.map(article, art => {
            return (
                article ?
                    <li className='list-group-item' key={art.id}>
                        <ul>
                            <li> Title : {art.title } </li>
                            <li> Category : {art.category} </li>
                            <li> Content : {art.content} </li>
                        </ul>
                        
                    </li>
            :
                    <div>Loading..</div>
            )
        })
    }
    render(){
        return(
            <div>
                article list
                {this.renderRow(this.props.articles)}
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(state);
    const articles = _.map(state.articles, (val, title) => {
        return {...val, title };
    });
    return { articles }
}

export default connect(mapStateToProps, {articleFetch} )(articleList);