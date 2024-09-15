import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavigationBar from './components/NavigationBar';
import HomePage from './components/HomePage';
import ContactContext from './context/ContactContext';
import ContactList from './components/ContactList';
import 'bootstrap/dist/css/bootstrap.min.css';
import TheProductPage from './components/TheProductPage';


function App() {
  const contactList = [
    {name: "Steve", email: "steve@gmail.com", phone: "212-232-4567" },
    {name: "Jim", email: "jimbostevens@hotmail.com", phone: "123-456-7890" },
    {name: "Eli", email: "bigguy23@gmail.com", phone: "987-123-1234" }
  ];
  const [ currentContact, setCurrentContact ] = useState({ name: '', email: '', phone: ''});

  return (
    <div className='app-container'>
      
        <NavigationBar />
        <ContactContext.Provider value={{ contactList, currentContact, setCurrentContact}}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/contacts' element={<ContactList />} />
            <Route path='/products' element={<TheProductPage />} />
      
          </Routes>
        </ContactContext.Provider>
    </div>
  )
}

export default App
