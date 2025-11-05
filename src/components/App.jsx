import Homepage from './Homepage';
import EmployeePage from './EmployeePage';
import ErrorPage from './ErrorPage';
// import EmployeeFormControlled from './EmployeeFormControlled';
import EmployeeFormUncontrolled from './EmployeeFormUncontrolled';
import { useState, useEffect } from 'react';


export default function App() {
    const [employees, setEmployees] = useState(null);
    const [selected, setSelected] = useState(0);
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

    function showEmployeePage() {
        if (!employees || employees.length === 0) {
            return <ErrorPage nested={true} title="Employee" message="No Employee Credentials Found" />;
        } else if (selected === 0) { // Prompt user to select another employee
            return <ErrorPage nested={true} title="Employee" message="Click on an employee to view their contact information." />;
        } else if (employees) { // Show that employee's contact info
            return <EmployeePage { ...employees.find(e => e.id === selected) } contact={contacts[selected]}/>;
        }
    }

    return (
        <div className='flex container'>
            <Homepage employeeList={employees} toggleForm={toggleForm} hidden={hidden} setEmployees={setEmployees} setSelected={setSelected}/>
            {showEmployeePage()}
            <EmployeeFormUncontrolled setEmployees={setEmployees} hidden={hidden}/>
        </div>
    )
}
