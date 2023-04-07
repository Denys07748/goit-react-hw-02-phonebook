import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem';

const ContactList = ({contacts}) => {
    return (
        <ul>
            {contacts.map(({id, name, number}) => 
                <ContactListItem key={id} name={name} number={number}/>
            )}
        </ul>
    )
}

export default ContactList;

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
        }),
    ),
}