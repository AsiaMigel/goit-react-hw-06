import { useDispatch } from 'react-redux'
import css from './Contact.module.css'
import { VscAccount } from 'react-icons/vsc'
import { FaPhoneAlt } from 'react-icons/fa'
import { deleteContact } from "../../../redux/contactsSlice";

const Contact = ({ contact }) => {
    const dispatch = useDispatch()
    
    return (
        <li className={css.listElContact}>
            <div className={css.contactForm}>
                <VscAccount />
                <p>{contact.name}</p>
            </div>
            <div className={css.contactForm}>
                <FaPhoneAlt />
                <p>{contact.number}</p>
            </div>
            <button className={css.btnContact} onClick={() => dispatch(deleteContact(contact.id))}>⭕⭕⭕</button>
        </li>
    );
};

export default Contact;