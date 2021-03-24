import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarEl from './components/Navbar';
import EmployeeTable from './components/EmployeeTable';
import React, { useState, useEffect } from 'react';
import API from './utils/API';

function App() {
	const [SearchState, setSearchState] = useState({
		results: [],
	});

	useEffect(() => {
		API.search().then((res) => {
			console.log(res);
		});
	});

	return (
		<div className="App">
			<header className="App-header">
				<NavbarEl />
				<EmployeeTable />
			</header>
		</div>
	);
}

export default App;
