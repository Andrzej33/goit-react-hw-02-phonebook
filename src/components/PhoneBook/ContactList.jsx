import { ContactItem } from "./ContactItem";
import PropTypes from "prop-types";




export const ContactList =({contacts,onDeleteContact}) =>{
return(
    <ul>
        {contacts.map((contact) =>{
            return(
            <li key={contact.id}>
                <ContactItem contact={contact}
                onDeleteContact={onDeleteContact}/>
            </li>)
        })}
    </ul>
)
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        })
    ).isRequired
}