import Homepage from './Homepage';
import EmployeePage from './EmployeePage';
import '../styles.css';

export default function App() {

    return (
        <div className='flex'>
            <Homepage/>
            <EmployeePage/>
        </div>
    )
}
