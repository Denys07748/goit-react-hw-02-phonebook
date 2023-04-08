// import React, { Component } from 'react';

// class ContactForm extends Component {
//     state = {
//         name: '',
//         number: ''
//     }

//     handleChange = e => {
//         const {name, value} = e.currentTarget

//         this.setState({ [name]: value });
//     }

//     handleSubmit = e => {
//         e.preventDefault();

//         this.props.onSubmit(this.state);
//         this.reset();
//     }

//     reset = () => {
//         this.setState({name: '', number: ''});
//     }

//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     Name<input
//                         type="text"
//                         name="name"
//                         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                         placeholder="Name"
//                         required
//                         value={this.state.name}
//                         onChange={this.handleChange}
//                     />
//                 </label>
//                 <label>
//                     Number<input
//                         type="tel"
//                         name="number"
//                         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                         placeholder="Number"
//                         required
//                         value={this.state.number}
//                         onChange={this.handleChange}
//                     />
//                 </label>
//                 <button type='submit'>Add contact</button>
//             </form>
//         )
//     }
// }
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const { validName: { checkName, messageName }, validNum: { checkNum, messageNum } } = {
    validName: {
        checkName: /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        messageName: 'Name may contain only letters, apostrophe, dash and spaces',
    },
    validNum: {
        checkNum: /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
        messageNum: 'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
    },
}

const schema = yup.object().shape({
    name: yup.string().matches(checkName, messageName).required('Name is required'),
    number: yup.string().matches(checkNum, messageNum).required('Number is required'),
});

const initialValues = {
    name: '', 
    number: '',
};

const ContactForm = ({onSubmit}) => {
    const handleSubmit = (values, {resetForm}) => {
        console.log(values);

        onSubmit(values);
        resetForm();
    };

        return (
            <Formik initialValues={initialValues} 
                    validationSchema={schema} 
                    onSubmit={handleSubmit}>
                <Form >
                    <label htmlFor='name'>
                        Name<Field
                            type="text"
                            name="name"
                        />
                        <ErrorMessage name="name" component='div'/>
                    </label>
                    <label htmlFor='number'>
                        Number<Field
                            type="tel"
                            name="number"
                        />
                        <ErrorMessage name="number" component='div'/>
                    </label>
                    <button type='submit'>Add contact</button>
                </Form>
            </Formik>
        );
}

export default ContactForm;

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};