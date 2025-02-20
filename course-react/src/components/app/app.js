import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeersList from '../employeers-list/employeers-list';
import EmployeersAddForm from '../employeers-add-form/employeers-add-form';

import './app.css';

function WhoAmI({ name, surname, link }) {
	return (
		<div>
			<h1>My name is {name()}, surename - {surname}</h1>
			<a href={link}>My profile</a>

		</div>
	);
};



function App() {
	return (
		<div className="app">
			<WhoAmI name={() => { return 'John' }} surname="Smith" link="facebook.com" />
			<WhoAmI name={() => { return 'Alex' }} surname="Shepard" link="vk.com" />

			<AppInfo />

			<div className="search-panel">
				<SearchPanel />
				<AppFilter />
			</div>

			<EmployeersList />
			<EmployeersAddForm />

		</div>
	);
}

export default App;