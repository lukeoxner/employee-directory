import React from 'react';

function EmployeeCard(props) {
	console.log(props);

	return (
		<>
			<ul className="list-group search-results">
				{props.results.map((result) => (
					<li key={result.id.value} className="list-group-item">
						<img
							alt="Photo of employee"
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

export default EmployeeCard;
