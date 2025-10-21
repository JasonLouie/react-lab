import '../styles.css';
import Header from './Header';
import Profile from './Profile';
import Number from './Number';

export default function EmployeePage() {
    return (
        <div className='page'>
            <Header />
            <Profile />
            <Number />
            <Number />
            <Number />
            <Number />
        </div>
    );
}