import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state';
import './App.css';

function App() {
	const account = useSelector((state) => state.account);

	const dispatch = useDispatch();

	const { depositMoney, withdrawMoney } = bindActionCreators(
		actionCreators,
		dispatch,
	);

	return (
		<div className='App'>
			<h1>{account}</h1>
			<div className=''>
				<button onClick={() => depositMoney(100)}>Deposit</button>
				<button onClick={() => withdrawMoney(100)}>Withdraw</button>
			</div>
		</div>
	);
}

export default App;
