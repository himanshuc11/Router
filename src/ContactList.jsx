import Contact from "./Contact"
import { v4 as uuidv4 } from 'uuid';

import { Link, Outlet } from "react-router-dom";

import data from './data'
import './ContactList.css'

const ContactList = ({contactData}) => {

    let renderData = contactData.map((contact) => <li key={contact.id}>
        <Link to={`/contact/${contact.id}`}>{contact.firstName + " " + contact.lastName}</Link>
    </li>)

    return (
        <div className="contact-page">
            <ul className="contacts">
                {renderData}
            </ul>
            
           <Outlet></Outlet>
        </div>
    )
}

export default ContactList
