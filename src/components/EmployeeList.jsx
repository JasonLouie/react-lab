import EmployeeListItem from "./EmployeeListItem";
import { employeeList } from "../data.js";

export default function EmployeeList() {
    const employees = employeeList.map(employee => <EmployeeListItem key={employee.name} {...employee} />);

    return (
        <div className="employee-list">{employees}</div>
    );
}