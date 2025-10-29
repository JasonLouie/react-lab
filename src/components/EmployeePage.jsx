import Header from './Header';
import Profile from './Profile';
import Contact from './Contact';
import { contacts } from "../data.js";

export default function EmployeePage({name, src, position}) {

    const contactContent = contacts.map(c => <Contact key={c.type} {...c} />);

    return (
        <div className='page'>
            <Header nested={true} title="Employee" />
            <Profile name={name || "Default Name"} src={src || "/images/profile.png"} position={position || "Default Position"}/>
            {contactContent}
        </div>
    );
}