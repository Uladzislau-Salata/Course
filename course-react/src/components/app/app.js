import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeersList from '../employeers-list/employeers-list';
import EmployeersAddForm from '../employeers-add-form/employeers-add-form';

import './app.css';

import { Component } from 'react';

class WhoAmI extends Component {

	constructor(props) {
		super(props);
		this.state = {
			years: 27,
			text: '+++',
			position: ''
		}
	}

	nextYear = () => {
		this.setState(state => ({
			years: state.years + 1
		}))
	}

	commitInuputChanges = (e, color) => {
		console.log(color);
		this.setState({
			position: e.target.value
		})

	}

	render() {
		const { name, surname, link } = this.props;
		const { position, years, text } = this.state;

		return (
			<div>
				<button onClick={this.nextYear}>{text}</button>
				<h1>My name is {name},surename - {surname},age-{years},position-{position}
				</h1>
				<a href={link}>My profile</a>
				<form>
					<span> Введите должность</span>
					<input
						type='text'
						onChange={(e) => this.commitInuputChanges(e, 'some color')}
					/>
				</form>
			</div>
		)
	}

}




function App() {


	const data = [
		{ name: "John C.", salary: 800, increase: false, id: 1 },
		{ name: "Alex M.", salary: 3000, increase: true, id: 2 },
		{ name: "Carl W.", salary: 15000, increase: false, id: 3 },
	];



	return (
		<div className="app">

			<WhoAmI name='John' surname='Smith' link="facebook.com" />
			<WhoAmI name='Alex' surname='Shepard' link="vk.com" />

			<AppInfo />

			<div className="search-panel">
				<SearchPanel />
				<AppFilter />
			</div>

			<EmployeersList data={data} />
			<EmployeersAddForm />

		</div>
	);
}

export default App;