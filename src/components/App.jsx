import Homepage from './Homepage';
import EmployeePage from './EmployeePage';
import EmployeeFormControlled from './EmployeeFormControlled.jsx';
import EmployeeFormUncontrolled from './EmployeeFormUncontrolled.jsx';
import { employeeList } from "../data.js";
import { useState } from 'react';


export default function App() {
    const [employees, setEmployees] = useState(employeeList);

    const [hidden, setHidden] = useState(true);

    function toggleForm() {
        setHidden(prev => !prev);
    }

    return (
        <div className='flex container'>
            <Homepage employeeList={employees} toggleForm={toggleForm} hidden={hidden} setEmployees={setEmployees}/>
            <EmployeePage {...employeeList[0]}/>
            <EmployeeFormUncontrolled setEmployees={setEmployees} hidden={hidden}/>
        </div>
    )
}
