import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeersList from '../employeers-list/employeers-list';
import EmployeersAddForm from '../employeers-add-form/employeers-add-form';

import './app.css';

// import { Component } from 'react';

// class WhoAmI extends Component {

// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			years: 27,
// 			text: '+++'
// 		}
// 	}

// 	nextYear = () => {
// 		console.log('+++');
// 		this.setState(state => ({
// 			years: state.years + 1
// 		}))
// 	}

// 	render() {
// 		const { name, surname, link } = this.props;

// 		return (
// 			<div>
// 				<button onClick={this.nextYear}>{this.state.text}</button>
// 				<h1>My name is {name}, surename - {surname}, age- {this.state.years}</h1>
// 				<a href={link}>My profile</a>
// 			</div>
// 		)
// }

// }

// <WhoAmI name='John' surname='Smith' link="facebook.com" />
// <WhoAmI name='Alex' surname='Shepard' link="vk.com" />


// (class App extends React.Component {

// 	constructor(props) {
// 	  super(props);
// 	  this.state={
// 		value : this.props.counter
// 	  }
// 	}

// 	incrementr=()=>{
// 	  if( this.state.value < 50 ){
// 		  this.setState(state => ({
// 			  value: state.value + 1
// 			}));
// 	  }
// 	};

// 	decrement=()=>{
// 	 if( this.state.value > -50 ){
// 		  this.setState(state => ({
// 			  value: state.value - 1
// 			}));
// 	   }
// 	};

// 	random=()=>{
// 		this.setState(state => ({
// 			  value: Math.floor(Math.random() * 101) - 50
// 			}));
// 	}

// 	reset=()=>{
// 		this.setState(state => ({
// 			  value:this.props.counter
// 			}));
// 	}

// Используйте только стрелочную форму методов
// Почему? Подробный ответ будет в следующем уроке

// 	render() {


// 	  return (
// 		<div class="app">
// 		  <div class="counter">{this.state.value}</div>
// 		  <div class="controls">
// 			<button onClick={this.incrementr}>INC</button>
// 			<button onClick={this.decrement}>DEC</button>
// 			<button onClick={this.random}>RND</button>
// 			<button onClick={this.reset}>RESET</button>
// 		  </div>
// 		</div>
// 	  )
// 	}
//   }

//   ReactDOM.render(<App counter={10}/>, document.getElementById('app'));

// 1) Начальное значение счетчика должно передаваться через props
// 2) INC и DEC увеличивают и уменьшают счетчик соответственно на 1. Без ограничений, но можете добавить границу в -50/50. По достижению границы ничего не происходит
// 3) RND изменяет счетчик в случайное значение от -50 до 50. Конструкцию можете прогуглить за 20 секунд :) Не зависит от предыдущего состояния
// 4) RESET сбрасывает счетчик в 0 или в начальное значение из пропсов. Выберите один из вариантов)



function App() {


	const data = [
		{ name: "John C.", salary: 800, increase: false, id: 1 },
		{ name: "Alex M.", salary: 3000, increase: true, id: 2 },
		{ name: "Carl W.", salary: 15000, increase: false, id: 3 },
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