import Header from './Header';
import Profile from './Profile';
import Contact from './Contact';

export default function EmployeePage() {
    return (
        <div className='page'>
            <Header nested={true} />
            <Profile name="Tommy Pickles" src="/images/tommypickles.jpg" position="Rugrats Protagonist"/>
            <Contact type="Call Home" info="111-111-1234" />
            <Contact type="Call Cell" info="222-345-9876" />
            <Contact type="Call Office" info="544-432-2321" />
            <Contact type="Email" info="tommypickles@gmail.com"/>
        </div>
    );
}