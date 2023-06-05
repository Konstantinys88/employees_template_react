import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({ data, onDelete, onToggleIncrease, onTogleLike }) => {

    const elements = data.map(item => {
        const { id, name, salary, increase, like } = item;
        return (
            <EmployeesListItem
                key={id} name={name}
                salary={salary}
                increase={increase}
                like={like}
                onDelete={() => onDelete(id)}
                onToggleIncrease={() => onToggleIncrease(id)}
                onTogleLike={() => onTogleLike(id)} />
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;