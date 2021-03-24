import React, { useState } from 'react';
import EmployeeCard from './EmployeeCard';

function EmployeeTable(props) {
	// console.log(props);

	const [search, setSearch] = useState('');

	const handleInputChange = (e) => {
		setSearch(e.target.value);
		// console.log(search);
	};

	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-md-10">
						<form className="search my-3">
							<div className="form-group">
								<label htmlFor="language">Search Employees:</label>
								<input
									value={search}
									onChange={handleInputChange}
									name="search"
									list="search"
									type="text"
									className="form-control"
									placeholder="Start typing a name..."
									id="term"
								/>
							</div>
						</form>
						<EmployeeCard results={props.results} search={search} />
					</div>
				</div>
			</div>
		</>
	);
}

export default EmployeeTable;
