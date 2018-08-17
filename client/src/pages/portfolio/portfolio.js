import React, { Component } from "react";
import { connect } from 'react-router';
import { Link } from 'react-router-dom';
import PortfolioList from '../../components/portfolio/portfolioList';
class Portfolio extends Component {

    render() {

        return (
            <div>
                <Link to='/' className='btn btn-default'> &larr; Back to home </Link>
                <h1>Portfolio sections for <b>SK Portfolio</b> development!</h1>
                <PortfolioList />        
            </div>
        );
    }
};

export default Portfolio;