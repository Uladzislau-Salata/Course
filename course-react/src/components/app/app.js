import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeersList from '../employeers-list/employeers-list';
import EmployeersAddForm from '../employeers-add-form/employeers-add-form';

import './app.css';

function App() {


	const data = [
		{ name: "John C.", salary: 800, increase: false },
		{ name: "Alex M.", salary: 3000, increase: true },
		{ name: "Carl W.", salary: 15000, increase: false },
	];



	return (
		<div className="app">

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