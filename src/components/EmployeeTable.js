import React from 'react';
import EmployeeCard from './EmployeeCard';

function EmployeeTable(props) {
	// console.log(props);
	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-md-10">
						<h1>Employee Table</h1>
						<EmployeeCard results={props.results} />
					</div>
				</div>
			</div>
		</>
	);
}

export default EmployeeTable;
