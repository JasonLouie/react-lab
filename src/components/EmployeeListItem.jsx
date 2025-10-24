export default function EmployeeListItem(props) {
    return (
        <div className="employee-item">
            <img className="preview-pic" src={props.src || "/images/profile.png"} alt="Employee Pic" />
            <div className='preview'>
                <h2 className='preview-name'>{props.name || "Default Name"}</h2>
                <p className='preview-position gray'>{props.position || "Default Position"}</p>
            </div>
        </div>
    );
}