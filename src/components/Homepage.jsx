import Header from './Header';
import SearchBar from './SearchBar';
import EmployeeList from './EmployeeList';
import { useState } from 'react';

export default function Homepage({employeeList}) {

    const [input, setInput] = useState("");

    function handleChange(e) {
        setInput(e.target.value.toLowerCase());
    }

    return (
        <div className='page'>
            <Header title="Employee Directory"/>
            <SearchBar onChange={handleChange}/>
            <EmployeeList filter={input} list={employeeList}/>
        </div>
    );
}