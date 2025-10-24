import Header from './Header';
import SearchBar from './SearchBar';
import EmployeeList from './EmployeeList';

export default function Homepage () {
    return (
        <div className='page'>
            <Header title="Employee" />
            <SearchBar />
            <EmployeeList />
        </div>
    );
}