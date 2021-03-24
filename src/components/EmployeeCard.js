import React from 'react';

function EmployeeCard(props) {
	console.log(props.results);

	if (!props.results) {
		return null;
	} else {
		return (
			<>
				<ul className="list-group search-results">
					{props.results.map((result) => (
						<li key={result.cell} className="list-group-item">
							<img
								alt="employee"
								src={result.picture.thumbnail}
								className="img-fluid"
							/>
							<p>
								{result.name.first} {result.name.last}
							</p>
							<p>{result.email}</p>
							<p>{result.cell}</p>
						</li>
					))}
				</ul>
			</>
		);
	}
}
export default EmployeeCard;
