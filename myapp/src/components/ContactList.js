// ContactList component
import React from 'react';
import ContactCard from './ContactCard';

const ContactList = (props) =>{
    const renderContactList = props.contacts.map((contact) => {
        return (
            <div>
            <ContactCard contact={contact}/>
            <div>
              <button onClick={()=> props.deleteItem(contact)}>Delete</button>
            </div>
          </div>
         );
    }); 
    return (
        <div className="name">{renderContactList}</div>
    );
};
export default ContactList;

