import React from "react";
export default class Form extends React.Component {
	state = {
		name: "",
		desc: "",
		price: "",
		quantity: ""
	};

	change = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
		console.log(this.state);
	};

	onClear = e => {
		this.setState ({
			name: "",
			desc: "",
			price: "",
			quantity: ""
		});
	};

	onSubmit = e => {
		e.preventDefault();
		fetch('/items', {
		  method: 'POST',
		  body: JSON.stringify(this.state),
		  headers:{
		    'Content-Type': 'application/json'
  		}
}).then(res => res.json())
		this.setState ({
			name: "",
			desc: "",
			price: "",
			quantity: ""
		});
	}

	render() {
		return (
			<div>
			<form>
				Name
				<input name = "name" 
				onChange = {e => this.change(e)}/>
				<br/><br/>
				Description
				<input name = "desc" 
				onChange = {e => this.change(e)}/>
				<br/><br/>
				Price
				<input name = "price" 
				onChange = {e => this.change(e)}/>
				<br/><br/>
				Quantity
				<input name = "quantity" 
				onChange = {e => this.change(e)}/>
				<br/><br/>
				<button onClick = {e => this.onSubmit(e)}>Submit</button>
				<button onClick = {e => this.onClear(e)}>Clear</button>								
			</form>
        	</div>
		);
	}


}