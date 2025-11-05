import Header from './Header';
import Profile from './Profile';
import Contact from './Contact';

export default function EmployeePage({ name, src, position, contact, message }) {
    const contactContent = contact ? contact.map(c => <Contact key={c.type} {...c} />) : <h1>No Contacts</h1>;
    return (
        <div className='page'>
            <Header nested={true} title="Employee" />
            {message ? 
                <p style={{ textAlign: "center" }}>{message}</p> : 
                <>
                    <Profile name={name || "Default Name"} src={src || "/images/profile.png"} position={position || "Default Position"} />
                    {contactContent}
                </>
            }
        </div>
    );
}