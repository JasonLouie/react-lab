import Header from "./Header.jsx";
import { useRef } from "react";

export default function EmployeeFormUncontrolled({setEmployees, hidden}) {

    const formRef = useRef(null);

    function submitForm(e) {
        e.preventDefault();
        const name = formRef.current.name.value;
        const position = formRef.current.position.value;
        if (name && position) {
            setEmployees(prev => [...prev, {id: prev.length+1, name, position, src: "/images/profile.png"}]);
            formRef.current.reset();
        }
    }

    return (
        <div className={`form-container flex ${hidden ? "hidden" : ""}`}>
            <Header title="Employee Form" />
            <form className="" onSubmit={submitForm} ref={formRef}>
                <input className="field" type="text" name="name" id="name" placeholder="Name" />
                <input className="field" type="text" name="position" id="position" placeholder="Position" />
                <button type="submit" id="submit">Add Employee</button>
            </form>
        </div>
    )
}