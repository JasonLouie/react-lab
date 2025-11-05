import EmployeeListItem from "./EmployeeListItem";

export default function EmployeeList({filter, list, setEmployees, setSelected}) {
    const employees = list ? list?.map(employee => {
        if (filter && employee.name.toLowerCase().includes(filter) || !filter){
            return <EmployeeListItem key={employee.id} setEmployees={setEmployees} setSelected={setSelected} {...employee} />;
        }
    }) : <h1>No Employees</h1>

    return (
        <div className="employee-list">{employees}</div>
    );
}