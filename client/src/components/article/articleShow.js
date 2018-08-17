import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { pickArticle, deleteArticle } from '../../actions/ArticleActions';
class articleShow extends Component {
    componentDidMount () {
        const {id } = this.props.match.params;
        console.log("id for post item : " + id);
        this.props.pickArticle(id);        
    }
    onDeleteClick () {
        const { id } = this.props.match.params;
        this.props.deleteArticle(id, () => {
            this.props.history.push('/article');
        });
    }
    render () {
        const {article }= this.props;
        console.log("article : ", article);
        if(!article ) {
            return <div> Loading ...</div>
        }
        return (
            <div>
                <Link to='/article' className='btn btn-primary'>Back To Index</Link>
                <button
                    className='btn btn-danger pull-xs-right'
                    onClick={this.onDeleteClick.bind(this)}
                >
                    Delete Article
                </button>
                <h3>{article.title}</h3>
                <h6>Categories : {article.category}</h6>
                <p> {article.content} </p>
            </div>
        );
    }
}

function mapStateToProps({articles}, ownProps){
    console.log(articles);
    return { article : articles[ownProps.match.params.id]};
}

export default connect(mapStateToProps, { pickArticle, deleteArticle})(articleShow);