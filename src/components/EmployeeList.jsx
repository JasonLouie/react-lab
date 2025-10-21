import EmployeeListItem from "./EmployeeListItem";
import '../styles.css';

export default function EmployeeList() {
    return (
        <div className="employee-list">
            <EmployeeListItem />
            <EmployeeListItem />
            <EmployeeListItem />
            <EmployeeListItem />
            <EmployeeListItem />
            <EmployeeListItem />
        </div>
    );
}