import React from 'react';

function EmployeeCard(props) {
	console.log(props.results);
	console.log(props.search);

	if (!props.results) {
		return null;
	} else if (props.results && !props.search) {
		return (
			<>
				<ul className="list-group search-results">
					{props.results.map((result) => (
						<li key={result.cell} className="list-group-item container">
							<div className="row">
								<div className="col-2">
									<img
										alt="employee"
										src={result.picture.thumbnail}
										className="img-fluid"
									/>
								</div>
								<p className="col-3">
									{result.name.first} {result.name.last}
								</p>
								<p className="col-5">{result.email}</p>
							</div>
						</li>
					))}
				</ul>
			</>
		);
	} else {
		let searchedResults = props.results.filter((result) => {
			let firstName = result.name.first.toLowerCase();
			let lastName = result.name.last.toLowerCase();
			let name = firstName.concat(' ', lastName);

			return name.indexOf(props.search.toLowerCase()) !== -1;
		});

		console.log(searchedResults);

		return (
			<>
				<ul className="list-group search-results">
					{searchedResults.map((result) => (
						<li key={result.cell} className="list-group-item container">
							<div className="row">
								<div className="col-2">
									<img
										alt="employee"
										src={result.picture.thumbnail}
										className="img-fluid"
									/>
								</div>
								<p className="col-3">
									{result.name.first} {result.name.last}
								</p>
								<p className="col-5">{result.email}</p>
							</div>
						</li>
					))}
				</ul>
			</>
		);
	}
}
export default EmployeeCard;
