import React, {Component} from 'react';
import firebase from 'firebase';
import _ from 'lodash';
import {portfoliosFetch} from '../../actions/PortfolioActions';
import { connect } from 'react-redux';

class PortfolioList extends Component {
    componentWillMount(){
        this.props.portfoliosFetch();
    }
    renderByComma(itemToSplit) {
        console.log(itemToSplit)
        if(itemToSplit){
            let arr = itemToSplit.split(',');
        return(
            _.map(arr, item => {
                return(
                    <button className='btn-xs btn-info'>{item}</button>
                );
            })
            
        );
        }
        return null;
        
    }
    renderRow(){
        console.log("here", this.props.portfolios);
        if(this.props.portfolios){
            if(!_.isEmpty(this.props.portfolios)){
            
            return _.map(this.props.portfolios, (portfolio, index) =>{
                console.log(portfolio);
                return(
                    
                    <div className='col-md-9'>
                        <div className={index%1=== 0 ? "text-left" : ""}>
                            <h3>{portfolio.title}</h3>
                            <span>
                                {this.renderByComma(portfolio.language)}
                                
                            </span>
                            <br />
                            <label>
                                {portfolio.description}
                            </label><br /><br />
                            <label>
                                Screenshots:
                            </label><br />
                            <a rel="gallery-1" href="img/SBS_Commodity_Broker/thumb0.JPG"
                                className="swipebox"
                                title="About Us Page">
                                <img src="img/SBS_Commodity_Broker/thumb0.JPG" alt="image" />
                            </a>
                            <a rel="gallery-1" href="img/SBS_Commodity_Broker/thumb1.JPG" className="swipebox" title="Account Information Page">
                                <img src="img/SBS_Commodity_Broker/thumb1.JPG" alt="image"/>
                            </a>
                            
                        </div>
                    </div>
                    
                );
                })
            }
        }
        console.log("Here : " , this.props.portfolios);        
    }
    render () {
        return(
            <div>
                <h1>Portfolio List</h1>
                {this.renderRow()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(state);
    const portfolios = _.map(state.portfolios, (val, uid) => {
        return { ...val, uid};
    });
    return {portfolios};
}

export default connect(mapStateToProps, {portfoliosFetch})(PortfolioList);