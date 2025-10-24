export default function EmployeeListItem({name, position, src}) {
    return (
        <div className="employee-item">
            <img className="preview-pic" src={src || "/images/profile.png"} alt="Employee Pic" />
            <div className='preview'>
                <h2 className='preview-name'>{name || "Default Name"}</h2>
                <p className='preview-position gray'>{position || "Default Position"}</p>
            </div>
        </div>
    );
}