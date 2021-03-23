import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavbarEl from './components/Navbar';
import React from 'react';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<NavbarEl />
			</header>
		</div>
	);
}

export default App;
