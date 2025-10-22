export default function EmployeeListItem() {
    return (
        <div className="employee-item">
            <img className="preview-pic" src="../../public/images/tommypickles.jpg" alt="Employee Pic" />
            <div className='preview'>
                <h2 className='preview-name'>Tommy Pickles</h2>
                <p className='preview-position gray'>Frontend Developer</p>
            </div>
        </div>
    );
}