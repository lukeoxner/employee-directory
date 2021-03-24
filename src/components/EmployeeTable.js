import React from 'react';
import EmployeeCard from './EmployeeCard';

function EmployeeTable(props) {
	// console.log(props);
	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-md-10">
						<form className="search">
							<div className="form-group">
								<label htmlFor="language">Search Employees:</label>
								<input
									value={props.search}
									onChange={props.handleInputChange}
									name="search"
									list="search"
									type="text"
									className="form-control"
									placeholder="Start typing a name..."
									id="term"
								/>
							</div>
						</form>
						<EmployeeCard results={props.results} />
					</div>
				</div>
			</div>
		</>
	);
}

export default EmployeeTable;
