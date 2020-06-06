import React from 'react';
import { FaHistory, FaUndo } from 'react-icons/fa';

class Grid extends React.Component
{
	constructor(props)
	{
		super(props);

		this.buttonClicked = this.buttonClicked.bind(this);
	}

	buttonClicked(e)
	{
		this.props.display(e.target.value);
	}

	render()
	{
		return (
			<div>
				<table>
				<tbody>
					<tr>
						<td><button className="btn btn-info" onClick={this.props.reset}>AC</button></td>
						<td><button className="btn btn-info" onClick={this.props.clear}><FaUndo /></button></td>
						<td><button className="btn btn-info" onClick={this.buttonClicked} value="%">%</button></td>
						<td><button className="btn btn-info" onClick={this.buttonClicked} value="/">/</button></td>
					</tr>
					<tr>
						<td><button className="btn btn-info numberButtons" onClick={this.buttonClicked} value="7">7</button></td>
						<td><button className="btn btn-info numberButtons" onClick={this.buttonClicked} value="8">8</button></td>
						<td><button className="btn btn-info numberButtons" onClick={this.buttonClicked} value="9">9</button></td>
						<td><button className="btn btn-info" onClick={this.buttonClicked} value="*">*</button></td>
					</tr>
					<tr>
						<td><button className="btn btn-info numberButtons" onClick={this.buttonClicked} value="4">4</button></td>
						<td><button className="btn btn-info numberButtons" onClick={this.buttonClicked} value="5">5</button></td>
						<td><button className="btn btn-info numberButtons" onClick={this.buttonClicked} value="6">6</button></td>
						<td><button className="btn btn-info" onClick={this.buttonClicked} value="-">-</button></td>
					</tr>
					<tr>
						<td><button className="btn btn-info numberButtons" onClick={this.buttonClicked} value="1">1</button></td>
						<td><button className="btn btn-info numberButtons" onClick={this.buttonClicked} value="2">2</button></td>
						<td><button className="btn btn-info numberButtons" onClick={this.buttonClicked} value="3">3</button></td>
						<td><button className="btn btn-info" onClick={this.buttonClicked} value="+">+</button></td>
					</tr>
					<tr>
						<td><button className="btn btn-info" onClick={this.props.clearHistory} value="0"><FaHistory /></button></td>						
						<td><button className="btn btn-info" onClick={this.buttonClicked} value="0">0</button></td>
						<td><button className="btn btn-info" onClick={this.buttonClicked} value=".">.</button></td>
						<td><button id="buttonEquals" className="btn btn-info" onClick={this.props.equals} value="=">=</button></td>
					</tr>
				</tbody>
				</table>
			</div>
			
		);
	}
}

export default Grid;