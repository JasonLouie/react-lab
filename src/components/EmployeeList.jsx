import EmployeeListItem from "./EmployeeListItem";

export default function EmployeeList() {
    return (
        <div className="employee-list">
            <EmployeeListItem name="Tommy Pickles" src="/images/tommypickles.jpg" position="Professional Napper" />
            <EmployeeListItem name="Chuckie Finster" src="/images/chuckiefinster.png" position="Scaredy Cat"/>
            <EmployeeListItem name="John Doe" position="Webmaster"/>
            <EmployeeListItem name="Jane Smith" position="Full Stack Developer"/>
            <EmployeeListItem name="Mike Jones" position="Front-End Developer"/>
            <EmployeeListItem name="Mary Anderson" position="Marketing Manager"/>
            <EmployeeListItem name="Susan Lee" position="Social Media Manager"/>
            <EmployeeListItem name="James Johnson" position="Accountant"/>
        </div>
    );
}