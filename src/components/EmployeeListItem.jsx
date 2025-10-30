import { useState } from "react";

export default function EmployeeListItem({name, position, src, setEmployees}) {
    const [hover, setHover] = useState(false);

    function toggleHover(e) {
        if (e.currentTarget.contains(e.target)) {
            setHover(e.type === "mouseenter" ? true : false);
        }
    }

    function handleRemove() {
        setEmployees(prev => prev.filter(p => p.name !== name));
    }

    return (
        <div className="employee-item" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
            <img className="preview-pic" src={src || "/images/profile.png"} alt="Employee Pic" />
            <div className='preview'>
                <h2 className='preview-name'>{name || "Default Name"}</h2>
                <p className='preview-position gray'>{position || "Default Position"}</p>
            </div>
            <button className={`delete-employee ${!hover ? "hidden": ""}`} onClick={handleRemove}>X</button>
        </div>
    );
}