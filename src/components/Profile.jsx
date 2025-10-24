export default function Profile() {
    return (
        <div id="profile">
            <img src="/images/tommypickles.jpg" id="employee-pic" alt="Employee Pic" />
            <div id="details">
                <h1 className='name'>Name</h1>
                <p className='position gray'>Position</p>
            </div>
        </div>
    );
}