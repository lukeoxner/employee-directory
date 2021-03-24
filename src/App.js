import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarEl from './components/Navbar';
import EmployeeTable from './components/EmployeeTable';
import React from 'react';

function App() {
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
