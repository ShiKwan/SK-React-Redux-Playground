import React, { Component } from 'react';
import {Field, reduxForm } from 'redux-form';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createArticle } from '../../actions/ArticleActions';

class articleCreate extends Component {
    renderField(field){
        const { meta: { touched, error } } = field;

        const className = `form-group ${touched && error ? 'has-danger' : ''}`
        return (
            <div className={className}>
                <label>{field.label}</label>
                <input
                    className='form-control'
                    type='text'
                    {...field.input}
                />
                <div className='text-help'>
                    {touched ? error : ''}
                </div>

            </div>
        );
    }

    onSubmit(values) {
        this.props.createArticle(values, () => {
            window.location.reload();
        });
    }

    render() {
        const {handleSubmit } = this.props;
        return(
            <div>
                Create New Post!
                <form onSubmit = {handleSubmit(this.onSubmit.bind(this))}>
                    <Field
                        label='Title'
                        name = 'title'
                        component = {this.renderField}
                    />
                    <Field
                        label='Category'
                        name='category'
                        component={this.renderField}
                    />
                    <Field
                        label='Content'
                        name='content'
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
    if (!values.category) {
        errors.category = 'Enter some categories';
    }
    if (!values.content) {
        errors.content = 'Enter some content please';
    }

    return errors;
}

export default reduxForm({
    validate,
    form : 'PostsNewArticle',
})(
    connect(null, { createArticle })(articleCreate)
);
