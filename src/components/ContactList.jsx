import { useContext, useState } from "react";
import ContactContext from "../context/ContactContext";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import ContactDetails from "./ContactDetails";

function ContactList() {

    const { contactList, currentContact, setCurrentContact } = useContext(ContactContext);
    
    const displayClickContact = (cname, cemail, cphone) => {
        setCurrentContact({ name: cname, email: cemail, phone: cphone});
        console.log(currentContact)
    }

    return (
        <Container>
            <Row>
                <Col>
                    <h3>Contacts</h3>
                    <small className="p-1 m-1">Click a contact to get more details on them.</small>
                    <ListGroup>
                        {contactList.map(contact => (
                            <ListGroup.Item key={contact.name} className="d-flex justify-content-between align-items-center shadow-sm p-3 mb-3 bg-white rounded" onClick={() => displayClickContact(contact.name, contact.email, contact.phone)}>
                                {contact.name}    
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>
                <Col>
                    <ContactDetails />
                </Col>
            </Row>
        </Container>
    )
}

export default ContactList;
