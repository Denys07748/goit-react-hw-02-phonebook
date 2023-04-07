import PropTypes from 'prop-types';

const ContactListItem = (({name, number}) => {
    return (
        <li>
           <p>{name}: {number}</p> 
        </li>
    )
});

export default ContactListItem;

ContactListItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
}