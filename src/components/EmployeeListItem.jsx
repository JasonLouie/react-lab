import { useState } from "react";

export default function EmployeeListItem({id, name, position, src, setEmployees, setSelected}) {
    const [hover, setHover] = useState(false);

    function toggleHover(e) {
        if (e.currentTarget.contains(e.target)) {
            setHover(e.type === "mouseenter" ? true : false);
        }
    }

    function handleRemove() {
        setEmployees(prev => {
            setSelected(0);
            return prev.filter(p => p.name !== name);
        });
    }

    return (
        <div className="employee-item" onMouseEnter={toggleHover} onMouseLeave={toggleHover} onClick={() => setSelected(id)}>
            <img className="preview-pic" src={src || "/images/profile.png"} alt="Employee Pic" />
            <div className='preview'>
                <h2 className='preview-name'>{name || "Default Name"}</h2>
                <p className='preview-position gray'>{position || "Default Position"}</p>
            </div>
            <button className={`delete-employee ${!hover ? "hidden": ""}`} onClick={handleRemove}>X</button>
        </div>
    );
}