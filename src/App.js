import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarEl from './components/Navbar';
import EmployeeTable from './components/EmployeeTable';
import React, { useState, useEffect } from 'react';
import API from './utils/API';

function App() {
	const [searchState, setSearchState] = useState();

	useEffect(() => {
		API().then((res) => {
			// console.log(res.data.results);
			setSearchState(res.data.results);
		});
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<NavbarEl />
				<EmployeeTable results={searchState} />
			</header>
		</div>
	);
}

export default App;
