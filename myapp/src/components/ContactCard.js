import React from "react";
//evaluates value of email variable and displays email of contact on screen
const ContactCard = (props) => { //The ContactCard component takes a prop (parameter) called contact, which is an object that contains the id, name, and email of a contact.
    const{id, name, email} = props.contact;
    return (
        <div className="content">
            <div className="header">{name}</div>
            <div className="header">{email}</div> 
        </div>    
    );
};
export default ContactCard;

