import React from 'react';

function EmployeeCard(props) {
	if (!props.results) {
		return null;
	} else if (props.results && !props.search && !props.sort) {
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
	} else if (props.results && !props.search && props.sort) {
		if (props.sort === 'asc') {
			// sort by ascending a-z
			props.results.sort((a, b) => {
				if (a.name.first < b.name.first) {
					return -1;
				} else if (a.name.first > b.name.first) {
					return 1;
				}
			});
		} else {
			// sort by descending z-a
			props.results.sort((a, b) => {
				if (a.name.first < b.name.first) {
					return 1;
				} else if (a.name.first > b.name.first) {
					return -1;
				}
			});
		}

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
