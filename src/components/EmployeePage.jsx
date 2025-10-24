import Header from './Header';
import Profile from './Profile';
import Contact from './Contact';
import { contacts } from "../data.js";

export default function EmployeePage() {

    const contactContent = contacts.map(c => <Contact key={c.type} {...c} />);

    return (
        <div className='page'>
            <Header nested={true} title="Employee Directory" />
            <Profile name="Tommy Pickles" src="/images/tommypickles.jpg" position="Professional Napper"/>
            {contactContent}
        </div>
    );
}