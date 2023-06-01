import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = () => {
    return (
        <ul className="app-list list-group">
            <EmployeesListItem name="Egor T." salary={500}/>
            <EmployeesListItem name="Oleg S." salary={1000}/>
            <EmployeesListItem name="Konstantin M." salary={1500}/>
        </ul>
    )
}

export default EmployeesList;