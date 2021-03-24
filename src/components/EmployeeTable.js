import React, { useState } from 'react';
import EmployeeCard from './EmployeeCard';
import Button from 'react-bootstrap/Button';

function EmployeeTable(props) {
	// console.log(props);

	const [search, setSearch] = useState('');
	const [sort, setSort] = useState('');

	const handleInputChange = (e) => {
		setSearch(e.target.value);
	};

	function sortAsc() {
		setSort('asc');
	}

	function sortDesc() {
		setSort('desc');
	}

	return (
		<>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-8">
						<form className="search my-3">
							<div className="form-group">
								<label htmlFor="language">Search Employees:</label>
								{/* <Input handleInputChange={handleInputChange} /> */}
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
					</div>
					<div className="row mb-3 justify-content-center">
						<div className="col-3">
							<Button onClick={sortAsc} variant="dark">
								Sort Ascending (A to Z)
							</Button>{' '}
						</div>
						<div className="col-3">
							<Button onClick={sortDesc} variant="dark">
								Sort Descending (Z to A)
							</Button>{' '}
						</div>
					</div>
					<div className="row">
						<EmployeeCard results={props.results} search={search} sort={sort} />
					</div>
				</div>
			</div>
		</>
	);
}

export default EmployeeTable;
