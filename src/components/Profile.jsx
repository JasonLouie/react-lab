export default function Profile({src, name, position}) {
    return (
        <div id="profile">
            <img src={src || "/images/profile.png"} id="employee-pic" alt="Employee Pic" />
            <div id="details">
                <h1 className='name'>{name || "Default Name"}</h1>
                <p className='position gray'>{position || "Default Position"}</p>
            </div>
        </div>
    );
}