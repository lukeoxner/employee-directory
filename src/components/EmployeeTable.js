import React from 'react';
import EmployeeCard from './EmployeeCard';

function EmployeeTable() {
	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-md-10">
						<h1>Employee Table</h1>
						<EmployeeCard />
					</div>
				</div>
			</div>
		</>
	);
}

export default EmployeeTable;
