import Header from './Header';
import SearchBar from './SearchBar';
import EmployeeList from './EmployeeList';
import { useState } from 'react';

export default function Homepage () {

    const [input, setInput] = useState("");

    function handleChange(e) {
        setInput(e.target.value.toLowerCase());
    }

    return (
        <div className='page'>
            <Header title="Employee"/>
            <SearchBar onChange={handleChange}/>
            <EmployeeList filter={input}/>
        </div>
    );
}