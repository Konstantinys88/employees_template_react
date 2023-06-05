import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import { Component } from 'react/cjs/react.development';

import './app.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{ name: "Egor T.", salary: 500, increase: true, like: false, id: 1 },
				{ name: "Oleg S.", salary: 1000, increase: false, like: false, id: 2 },
				{ name: "Konstantin M.", salary: 1500, increase: false, like: true, id: 3 },
			],
		}
		this.maxId = 4
	}

	deleteItem = (id) => {
		this.setState(({ data }) => {
			return {
				data: data.filter(item => item.id !== id)
			}
		})
	}

	addItem = (name, salary) => {
		const newItem = {
			name,
			salary,
			id: this.maxId++,
			increase: false,
			like: false,
		}
		this.setState(({ data }) => {
			const newArr = [...data, newItem]; // в старый массив записываем новый обьект
			return {
				data: newArr
			}
		});
	}

	onToggleIncrease = (id) => {
		this.setState(({ data }) => ({
			data: data.map(item => {
				if (item.id === id)
					return { ...item, increase: !item.increase }
				return item;
			})
		}))
	}

	onTogleLike = (id) => {
		this.setState(({ data }) => ({
			data: data.map(item => {
				if (item.id === id)
					return { ...item, like: !item.like }
				return item;
			})
		}))
	}


	render() {
		const employees = this.state.data.length;
		const increased = this.state.data.filter(item => item.increase).length;
		return (
			<div className="app">
				<AppInfo 
				employees={employees} 
				increased={increased} 
				/>

				<div className="search-panel">
					<SearchPanel />
					<AppFilter />
				</div>

				<EmployeesList
					data={this.state.data}
					onDelete={this.deleteItem}
					onToggleIncrease={this.onToggleIncrease}
					onTogleLike={this.onTogleLike} />
				<EmployeesAddForm onAddItem={this.addItem} />
			</div>
		);
	}
}

export default App;
