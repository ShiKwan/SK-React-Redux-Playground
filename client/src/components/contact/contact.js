import React, { Component } from 'react';
import {Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import {emailSent, emailUpdate} from '../../actions/ContactActions';

class contact extends Component {

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
        this.props.emailSent(values, () => {
            console.log(this.props);
        });
    }

    render(){
        
        const {handleSubmit } = this.props;

        return( 
            <form onSubmit = {handleSubmit(this.onSubmit.bind(this))} className="contactForm">
                <Field
                    label='Name'
                    name = 'name'
                    elem = 'input'
                    value = {this.props.name}
                    onChange={value => this.props.emailUpdate({ prop: 'name' })}
                    component = {this.renderField}
                />
                <Field
                    label='Email'
                    name = 'email'
                    elem = 'input'
                    value = {this.props.email}
                    onChange = { value => this.props.emailUpdate({prop: 'email'})}
                    component = {this.renderField}
                />
                <Field
                    label='Title'
                    name = 'title'
                    elem = 'input'
                    value = {this.props.title}
                    onChange = { value => this.props.emailUpdate({prop: 'title'})}
                    component = {this.renderField}
                />
                <Field
                    label='Message'
                    name = 'message'
                    elem = 'textArea'
                    value = {this.props.message}
                    onChange = { value => this.props.emailUpdate({prop: 'message'})}
                    component = {this.renderField}
                />
                <button type='submit' className='btn btn-primary'>Send Message</button>
            </form>
        );
    }
}


function validate(values) {
    const errors = {};
    if (!values.title || values.title.length < 3) {
        errors.title = 'Enter a title that is at least 3 characters!';
    }
    if (!values.email) {
        errors.email = 'Email address cannot be empty!';
    }
    if (!values.message) {
        errors.message = 'Message cannot be empty!';
    }
    if (!values.name) {
        errors.name = 'Name cannot be empty!';
    }
    return errors;
}
const stateToProps =(state) => {
    console.log("state : ", state);
    const {title, email, message, name} = state.email
    return {title, email, message, name};
}
export default reduxForm({
    validate,
    form : 'EmailForm',
})(
    connect(stateToProps, { emailSent, emailUpdate })(contact)
);