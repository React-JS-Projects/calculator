import React from 'react';

class Display extends React.Component
{
	render()
	{
		return (
			
			<div id="displayBox">
			<input type="text" id="displayHeading" value={this.props.value} readonly="readonly" />			
			</div>
		);
	}
}

export default Display;