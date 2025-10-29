import Header from "./Header.jsx";
import { useState } from "react";

export default function EmployeeForm({setEmployees, hidden}) {

    const [formData, setFormData] = useState({name: "", position: "", src: "/images/profile.png"});

    function handleChange(e) {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    function submitForm(e) {
        e.preventDefault();
        if (formData.name && formData.position) {
            setEmployees(prev => [...prev, formData]);
            setFormData({...formData, name: "", position: ""});
        }
    }

    return (
        <div className={`form-container flex ${hidden && "hidden"}`}>
            <Header title="Employee Form" />
            <form className="" onSubmit={submitForm}>
                <input className="field" type="text" name="name" id="name" placeholder="name" onChange={handleChange} value={formData.name} />
                <input className="field" type="text" name="position" id="position" placeholder="position" onChange={handleChange} value={formData.position} />
                <button type="submit" id="submit">Add Employee</button>
            </form>
        </div>
    )
}