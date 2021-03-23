import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

function NavbarEl() {
	return (
		<>
			<Navbar bg="dark" variant="dark" className="justify-content-center">
				<Navbar.Brand href="#home">
					<img
						alt=""
						src="./logo512.png"
						width="30"
						height="30"
						className="d-inline-block align-top me-3"
					/>{' '}
					Employee Directory
				</Navbar.Brand>
			</Navbar>
		</>
	);
}

export default NavbarEl;
