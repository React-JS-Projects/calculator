import React from 'react';

class History extends React.Component
{
	render()
	{
		var operations = this.props.operations;		

		return (			

			<div>
				<p>Recent calculations ... </p>
				<ul>
				{
					operations.map(function(operation) 
					{
						return(<li>{operation}</li>);
					})
				}
				</ul>
			</div>
		);
	}
}

export default History;