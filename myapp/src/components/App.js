import React, {useState, useEffect} from 'react';
import "./App.css";
import Header from "./Header.js";
import AddContact from './AddContact.js';
import ContactList from"./ContactList.js"; 
function App() {
    const LOCAL_STORAGE_KEY = "contacts";
    const [contacts, setContacts] = useState([]);
    const addContactHandler = (contact) => {
      console.log(contact);
      setContacts([...contacts, contact ]); //update the state
    };
    const deleteItem = (contact) => {
      setContacts(contacts.filter(item => item !== contact));
    }
    
    useEffect(() => {
      const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)); 
      if (retriveContacts) setContacts(retriveContacts);

    }, []);
    useEffect(() => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts)); 
    }, [contacts]);
    
    return (
    <div className="color">
        <Header/>
        <AddContact addContactHandler={addContactHandler}/>
        <ContactList contacts={ contacts} deleteItem={deleteItem}/>
    </div>
    );
} 
export default App;