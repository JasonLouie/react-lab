import Homepage from './Homepage';
import EmployeePage from './EmployeePage';
import EmployeeFormControlled from './EmployeeFormControlled.jsx';
import EmployeeFormUncontrolled from './EmployeeFormUncontrolled.jsx';
// import { employeeList } from "../data.js";
import { useState, useEffect } from 'react';


export default function App() {
    const [employees, setEmployees] = useState(null);
    const [selected, setSelected] = useState(1);
    const [contacts, setContacts] = useState(null);

    const [hidden, setHidden] = useState(true);

    // Function to get users
    async function getUsers() {
        try {
            // Make fetch request and store the response
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/users`
            );
            const users = await response.json();
            
            // Map through users to conform to employee components
            const contactObj = {};

            const employeeList = users.map(u => { 
                const contactInfo = [];

                const keys = ["website", "email", "phone"];

                keys.forEach(key => {
                    if (u[key]) {
                        contactInfo.push({type: key[0].toUpperCase() + key.slice(1), info: u[key]});
                    }
                });
                contactObj[u.id] = contactInfo;
                return { id: u.id, name: u.name, position: u.company.name } 
            })
            setEmployees(employeeList);
            setContacts(contactObj);
        } catch (error) {
            console.error(error)
        }
    };

    useEffect(() => {
        getUsers();
    }, []);

    function toggleForm() {
        setHidden(prev => !prev);
    }

    return (
        <div className='flex container'>
            <Homepage employeeList={employees} toggleForm={toggleForm} hidden={hidden} setEmployees={setEmployees} setSelected={setSelected}/>
            {employees ? <EmployeePage { ...employees.find(e => e.id === selected) } contact={contacts[selected]}/> : "No Employees"}
            <EmployeeFormUncontrolled setEmployees={setEmployees} hidden={hidden}/>
        </div>
    )
}
