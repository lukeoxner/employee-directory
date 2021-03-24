import React from 'react';

function EmployeeCard(props) {
	let filteredResults =
		props.results &&
		props.results.filter((result) => {
			let firstName = result.name.first.toLowerCase();
			let lastName = result.name.last.toLowerCase();
			let name = firstName.concat(' ', lastName);

			return name.indexOf(props.search.toLowerCase()) !== -1;
		});

	if (props.sort === 'asc') {
		// sort by ascending a-z
		filteredResults.sort((a, b) => {
			if (a.name.first < b.name.first) {
				return -1;
			} else if (a.name.first > b.name.first) {
				return 1;
			}
		});
	} else if (props.sort === 'desc') {
		// sort by descending z-a
		filteredResults.sort((a, b) => {
			if (a.name.first < b.name.first) {
				return 1;
			} else if (a.name.first > b.name.first) {
				return -1;
			}
		});
	}

	console.log(filteredResults);

	if (!props.results) {
		return null;
	} else {
		return (
			<>
				<ul className="list-group search-results">
					{filteredResults.length || props.search
						? filteredResults.map((result) => (
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
						  ))
						: props.results.map((result) => (
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
