import EmployeeListItem from "./EmployeeListItem";

export default function EmployeeList({filter, list, setEmployees}) {
    const employees = list.map(employee => {
        if (filter && employee.name.toLowerCase().includes(filter) || !filter){
            return <EmployeeListItem key={employee.name} setEmployees={setEmployees} {...employee} />;
        }
    });

    return (
        <div className="employee-list">{employees}</div>
    );
}