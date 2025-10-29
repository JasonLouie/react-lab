import Homepage from './Homepage';
import EmployeePage from './EmployeePage';
import EmployeeForm from './EmployeeForm';
import { employeeList } from "../data.js";
import { useState } from 'react';


export default function App() {
    const [employees, setEmployees] = useState(employeeList);

    return (
        <div className='flex'>
            <Homepage employeeList={employees}/>
            <EmployeePage {...employeeList[0]}/>
            <EmployeeForm setEmployees={setEmployees} />
        </div>
    )
}
