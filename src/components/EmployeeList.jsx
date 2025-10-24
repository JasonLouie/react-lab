import EmployeeListItem from "./EmployeeListItem";
import { employeeList } from "../data.js";

export default function EmployeeList({filter}) {
    const employees = employeeList.map(employee => {
        if (filter && employee.name.toLowerCase().includes(filter) || !filter){
            return <EmployeeListItem key={employee.name} {...employee} />
        }
    });

    return (
        <div className="employee-list">{employees}</div>
    );
}