export default function Profile(props) {
    return (
        <div id="profile">
            <img src={props.src || "/images/profile.png"} id="employee-pic" alt="Employee Pic" />
            <div id="details">
                <h1 className='name'>{props.name || "Default Name"}</h1>
                <p className='position gray'>{props.position || "Default Position"}</p>
            </div>
        </div>
    );
}