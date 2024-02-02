import React, { useState} from 'react';
 
function AddContact(props) {
  const [name, setName] = useState("");  
  const [email, setEmail] = useState("");
  const add = (e) => {  
    e.preventDefault();
    props.addContactHandler({name, email});
    setName("");
    setEmail("");
  };
  return (
    <div className ="main">
      <h2>Add Contact</h2>
      <form onSubmit={add}>
        <label>Name</label>
        <input type = "text" name="name" placeholder="enter your name" value={name} onChange={ (e) => setName(e.target.value)} />
        <label>email</label>
        <input type = "text" name="email" placeholder="enter your email" value={email} onChange={ (e) => setEmail(e.target.value)} />
        <button>add</button>
      </form>
    </div>
  );
}
function App() {
  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) => { //// Define a function to add a contact to the state
    console.log(contact);
    setContacts([...contacts, contact ]); //update the state
  };
  const ContactCard = (props) => {
    const {name, email} = props.contact;
    return (
        <div className ="content">
            {name}
            {email}
        </div>
    )
}
const ContactList =(props)=> {
    const renderContactList = props.contacts.map((contact) => {
        return(
            <ContactCard contact={contact}/>
        );
    });    
    return(
       <div>{renderContactList}</div>
    );    
}    
  return (   // Define the render function
    <div className ="app">
      <h2>Contact Information</h2>
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts}/>
    </div>
  );
};
export default App;