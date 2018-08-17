import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createPortfolio } from '../../actions/PortfolioActions';

class portfolioCreate extends Component {
    renderField(field){
       
        const { meta: { touched, error } } = field;

        const className = `form-group ${touched && error ? 'has-danger' : ''}`
        
            switch (field.elem) {
                case "input" :
                return (
                    <div className={className}>
                        <label>{field.label}</label>
                        <input
                            className='form-control'
                            type={field.elem}
                            {...field.input}
                        />
                        <div className='text-help'>
                            {touched ? error : ''}
                        </div>

                    </div>
                );
                case "textArea" :
                return (
                    <div className={className}>
                        <label>{field.label}</label>
                        <textArea
                            className='form-control'
                            type={field.elem}
                            {...field.input}
                        />
                        <div className='text-help'>
                            {touched ? error : ''}
                        </div>

                    </div>
                );
            }
            
        
    }
    onSubmit(values) {
        this.props.createPortfolio(values, () => {

            this.props.history.push('/');
        });
    }
    render() {
        const {handleSubmit } = this.props;
        
        return(
            <div>
                <h1>Creating a new Portfolio</h1>
                <form onSubmit = {handleSubmit(this.onSubmit.bind(this))}>
                        <Field
                            label='Title'
                            name = 'title'
                            elem = 'input'
                            component = {this.renderField}
                        />
                        <Field
                            label='Languages'
                            name='language'
                            elem = 'input'
                            component={this.renderField}
                        />
                        <Field
                            label='Description'
                            name='description'
                            elem = 'textArea'
                            component={this.renderField}
                        />
                        <Field 
                            label='Main Image'
                            name= 'mainImage'
                            elem = 'input'
                            component={this.renderField}
                        />
                        <Field
                            label='Thumbnail'
                            name = 'thumbnail'
                            elem = 'textArea'
                            component={this.renderField}
                        />
                        <button type='submit' className='btn btn-primary'>Submit</button>
                        <Link to='/' className='btn btn-danger'> Cancel </Link>
                    </form>
                </div>
        );
    }
}

function validate(values) {
    const errors = {};
    if (!values.title || values.title.length < 3) {
        errors.title = 'Enter a title that is at least 3 characters!';
    }
    if (!values.language) {
        errors.language = 'Enter some categories';
    }
    if (!values.description) {
        errors.description = 'Enter some content please';
    }
    if (!values.mainImage) {
        errors.mainImage = 'Enter an image link';
    }
    if(!values.thumbnail) {
        errors.thumbnail = 'Enter thumbnail image link';
    }

    return errors;
}
const stateToProps =(state) => {
    const {title, language, description, mainImage, thumbnail} = state.portfolios
    return {title, language, description, mainImage, thumbnail};
}
export default reduxForm({
    validate,
    form : 'CreateNewPortfolio',
})(
    connect(stateToProps, { createPortfolio })(portfolioCreate)
);