import React from 'react';
import Display from './Display';
import Grid from './Grid';
import History from './History';


class Calculator extends React.Component
{
	constructor(props)
	{
		super(props);

		this.state = 
		{
			display: "0",
			history: []
		};

		this.display = this.display.bind(this);
		this.reset = this.reset.bind(this);
		this.equals = this.equals.bind(this);
		this.clear = this.clear.bind(this);
		this.clearHistory = this.clearHistory.bind(this);
	}

	equals()
	{
		var currentDisplay = this.state.display;
		var lastCharacter = currentDisplay.charAt(currentDisplay.length - 1);
		var operations = ["+","-","*","/","%"];
		var skip = ["+","-","*","/","%", "0"];

		var expression = this.state.display;

		if (expression.length === 1 && skip.includes(expression))
		{
			return;
		}

		if (operations.includes(lastCharacter))
		{
			expression = expression.substring(0, expression.length - 1);
		}

		// eslint-disable-next-line
		var evaluatedExpression = eval(expression);

		this.setState
		({
			display: evaluatedExpression.toString(),
			history: [...this.state.history, expression + " = " + evaluatedExpression]
		});
	}

	display(clickedButton)
	{
		var newDisplay = "";
		var currentDisplay = this.state.display;		
		var operations = ["+","-","*","/","%"];

		console.log(clickedButton + "," + currentDisplay);

		if (currentDisplay !== "0")
		{
			var lastCharacter = currentDisplay.charAt(currentDisplay.length - 1);

			if (operations.includes(lastCharacter) && operations.includes(clickedButton))
			{
				if (lastCharacter === clickedButton)
				{
					return;
				}
				else 
				{
					newDisplay = currentDisplay.substring(0, currentDisplay.length - 1) + clickedButton;
				}
			}
			else 
			{
				newDisplay = currentDisplay + clickedButton;
			}
		}
		else 
		{
			newDisplay = clickedButton;
		}

		this.setState
		({
			display: newDisplay
		});
	}

	reset()
	{
		this.setState
		({
			display: "0"
		});
	}

	clear()
	{		
		var newDisplay = "";
		var currentDisplay = this.state.display;

		// If zero don't do anything
		if (currentDisplay === "0")
		{
			return;
		}
		else if (currentDisplay.length === 1)
		{
			newDisplay = "0";
		}
		else 
		{
			newDisplay = currentDisplay.substring(0, currentDisplay.length - 1);
		}

		this.setState
		({
			display: newDisplay
		});
	}

	clearHistory()
	{
		this.setState
		({
			history: []
		});
	}

	render()
	{
		return (
			<div className="row">
				<div className="col-lg-5">
					<History operations={this.state.history} remember="15" />
				</div>
				<div id="calculator" className="col-lg-6">
					<Display value={this.state.display} />
					<Grid display={this.display} reset={this.reset} equals={this.equals} clear={this.clear} clearHistory={this.clearHistory} />
				</div>
			</div>
		);
	}
}

export default Calculator;