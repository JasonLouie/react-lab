import Header from './Header';
import SearchBar from './SearchBar';
import EmployeeList from './EmployeeList';
import { useState } from 'react';

export default function Homepage({employeeList, toggleForm, hidden, setEmployees}) {

    const [input, setInput] = useState("");

    return (
        <div className='page'>
            <Header title="Employee Directory"/>
            <button type="button" className="show-form-btn" onClick={toggleForm}>{hidden ? "Add Employee" : "Hide"}</button>
            <SearchBar setInput={setInput}/>
            <EmployeeList filter={input} list={employeeList} setEmployees={setEmployees}/>
        </div>
    );
}