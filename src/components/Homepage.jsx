import Header from './Header';
import SearchBar from './SearchBar';
import EmployeeList from './EmployeeList';
import { useState } from 'react';

export default function Homepage({employeeList, toggleForm, hidden, setEmployees, setSelected}) {

    const [input, setInput] = useState("");

    return (
        <div className='page'>
            <Header title="Employee Directory"/>
            <button type="button" className="show-form-btn" onClick={toggleForm}>{hidden ? "Add Employee" : "Hide"}</button>
            <SearchBar setInput={setInput}/>
            {employeeList?.length > 0 ? <EmployeeList filter={input} list={employeeList} setEmployees={setEmployees} setSelected={setSelected}/> : <h2 className='message'>No Employees Found</h2>}
        </div>
    );
}