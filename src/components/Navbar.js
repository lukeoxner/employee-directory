import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

function NavbarEl() {
	return (
		<>
			<Navbar bg="dark" variant="dark" className="justify-content-center">
				<Navbar.Brand>Employee Directory</Navbar.Brand>
			</Navbar>
		</>
	);
}

export default NavbarEl;
