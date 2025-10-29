import Header from './Header';
import SearchBar from './SearchBar';
import EmployeeList from './EmployeeList';
import { useState } from 'react';

export default function Homepage({employeeList, toggleForm, hidden}) {

    const [input, setInput] = useState("");

    function handleChange(e) {
        setInput(e.target.value.toLowerCase());
    }

    return (
        <div className='page'>
            <Header title="Employee Directory"/>
            <button type="button" className="show-form-btn" onClick={toggleForm}>{hidden ? "Add Employee" : "Hide"}</button>
            <SearchBar onChange={handleChange}/>
            <EmployeeList filter={input} list={employeeList}/>
        </div>
    );
}