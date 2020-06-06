import React from 'react';
import './App.css';
import Calculator from './components/Calculator';

function App() {
  return (
	<div className="container-fluid">
		<div className="row">
			<div className="col-lg-12">
				<h1 id="appName">The Calculator!</h1>
			</div>			
		</div>		
		<Calculator />					
	</div>
  );
}

export default App;
