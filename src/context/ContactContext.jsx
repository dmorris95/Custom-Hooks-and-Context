import React from "react";

const ContactContext = React.createContext({
    contactList: [],

    currentContact: { name: '', phone: '', email: '' },
    setCurrentContact: () => {}

});

export default ContactContext;