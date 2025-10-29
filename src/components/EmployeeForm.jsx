import Header from "./Header.jsx";
import { employeeList } from "../data.js";
import { useState } from "react";

export default function EmployeeForm() {

    const [inputs, setInputs] = useState({name: "", position: ""});

    function handleChange(e) {
        setInputs({...inputs, [e.target.name]: e.target.name})
    }

    function submitForm(e) {
        e.preventDefault();
        if (e.elements["name"] && e.elements["position"]) {
            employeeList.push({name: e.elements["name"], position: e.elements["position"]});
        }
    }

    return (
        <div className="page form-container">
            <Header title="Employee Form" />
            <form className="" onSubmit={submitForm}>
                <input className="field" type="text" name="name" id="name" placeholder="name" onChange={handleChange} />
                <input className="field" type="text" name="position" id="position" placeholder="position" onChange={handleChange} />
            </form>
        </div>
    )
}