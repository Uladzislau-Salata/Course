// import { Component } from "react";

// import { connect } from "react-redux";
import { inc, dec, rnd } from '../action';
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
	const counter = useSelector(state => state.counter);
	const dispatch = useDispatch();

	return (
		<div className="jumbotrom">
			<h1 >{counter}</h1>
			<button onClick={() => dispatch(dec())} className="btn btn-primary">DEC</button>
			<button onClick={() => dispatch(inc())} className="btn btn-primary">INC</button>
			<button onClick={() => dispatch(rnd())} className="btn btn-primary">RND</button>
		</div>
	)
}

// class Counter extends Component {

// 	render() {
// 		const { counter, inc, dec, rnd } = this.props;
// 		return (
// 			<div className="jumbotrom" >
// 				<h1 >{counter}</h1>
// 				<button onClick={dec} className="btn btn-primary">DEC</button>
// 				<button onClick={inc} className="btn btn-primary">INC</button>
// 				<button onClick={rnd} className="btn btn-primary">RND</button>
// 			</div>
// 		)
// 	}
// }

// const mapStateToProps = (state) => {
// 	return {
// 		counter: state.value
// 	}
// }

// export default connect(mapStateToProps, actions)(Counter);
export default Counter;