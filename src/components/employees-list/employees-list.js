import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data, onDelete}) => {

    const elements = data.map(item => {
        const{id, name, salary, increase,} = item;
        return(
            <EmployeesListItem 
            key={id} name={name} 
            salary={salary} 
            increase={increase}
            onDelete={() => onDelete(id)}/>
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;