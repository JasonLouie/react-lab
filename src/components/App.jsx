import Homepage from './Homepage';
import EmployeePage from './EmployeePage';
import EmployeeForm from './EmployeeForm';
import { employeeList } from "../data.js";

export default function App() {

    return (
        <div className='flex'>
            <Homepage/>
            <EmployeePage {...employeeList[0]}/>
            <EmployeeForm />
        </div>
    )
}
