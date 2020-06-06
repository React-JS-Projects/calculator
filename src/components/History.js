import React from 'react';

class History extends React.Component
{
	render()
	{
		var operations = this.props.operations;
		operations = operations.reverse().slice(0,15);

		return (			

			<div>
				<p>Recent calculations ... </p>
				<ul>
				{
					operations.map(function(operation, index) 
					{
						return(<li key={index}>{operation}</li>);
					})
				}
				</ul>
			</div>
		);
	}
}

export default History;