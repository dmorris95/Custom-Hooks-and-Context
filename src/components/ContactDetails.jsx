import { useContext } from "react";
import ContactContext from "../context/ContactContext";
import { Container, Row, Col, ListGroup} from "react-bootstrap";

function ContactDetails() {
    const contactInfo = useContext(ContactContext);
    
    return (
        
        <ListGroup>
            <h3>Details</h3>
            <ListGroup.Item className="shadow-sm p-3 mb-3">
                Name: {contactInfo.currentContact.name}
            </ListGroup.Item>
            <ListGroup.Item className="shadow-sm p-3 mb-3">
                Email: {contactInfo.currentContact.email}
            </ListGroup.Item>
            <ListGroup.Item className="shadow-sm p-3 mb-3">
                Phone: {contactInfo.currentContact.phone}
            </ListGroup.Item>
        </ListGroup>
    )
}

export default ContactDetails;