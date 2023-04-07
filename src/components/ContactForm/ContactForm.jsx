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

const ContactForm = ({onSubmit}) => {
    const handleSubmit = e => {
        e.preventDefault();

        const { name, number } = e.target.elements;
        console.log({name: name.value, number: number.value});
        const contact = {
            name: name.value, 
            number: number.value,
        };
        onSubmit(contact);
    }

        return (
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>
                    Name<input
                        type="text"
                        name="name"
                    />
                </label>
                <label htmlFor='number'>
                    Number<input
                        type="tel"
                        name="number"
                    />
                </label>
                <button type='submit'>Add contact</button>
            </form>
        );
}

export default ContactForm;