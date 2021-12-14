import { NavLink, Link, Routes, Route, Outlet } from "react-router-dom"
import ContactList from "./ContactList"
import Contact from "./Contact"

import data from './data'
import { v4 as uuidv4 } from 'uuid';

const App = () => {
    let contactData = data.map((contact) => {
        return {...contact, id: uuidv4()}
    })

    return (
        <div>
            <Routes>
                <Route path="/contact" element={<ContactList contactData={contactData}></ContactList>}>
                    <Route index element={<p>Click on Link to see the data</p>}></Route>
                    <Route path=":contactId" element={<Contact contacts={contactData}></Contact>}></Route>
                </Route>
            </Routes>
            
        </div>
    )
}


export default App
