import './Contact.css'
import { useParams } from 'react-router-dom'


const Contact = ({contacts}) => {

    const params = useParams()
    const id = params.contactId

    const contactData = contacts.filter((contact) => contact.id === id)[0]

    return (
        <div className="detail">
            <p>First: {contactData.firstName}</p>
            <p>Last: {contactData.lastName}</p>
            <p>State: {contactData.state}</p>
        </div>
    )
}

export default Contact
