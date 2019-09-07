import React, { Component } from 'react';

class AddSubject extends Component{


	constructor(props){
		super(props);

		this.nameInput = React.createRef();
		this.emailInput = React.createRef();
		this.phoneInput = React.createRef();
	}

	onSubmit = (e) => {
		e.preventDefault();
		const contact = {
			name: this.nameInput.current.value,
			email: this.emailInput.current.value,
			phone: this.phoneInput.current.value
		}

		console.log(contact);
	}

	static defaultProps = {
		name: 'Fred Mercury',
		email: 'queen@gmail.com',
		phone: '7777777777'
	}

	render(){
		const { name, email, phone } = this.props;
		return (
			<div className="container">
				<div className="col-sm-12">
					<div className="card mb-3">
						<div className="card-header">
							Add Contact
						</div>
						<div className="card-body">
							<form onSubmit={this.onSubmit} >
								<div className="form-group">
									<label htmlFor="name">Name</label>
									<input 
										className="form-control form-control-lg"
										type="text"
										placeholder="Enter Name..."
										name="name"
										defaultValue={name}
										ref={this.nameInput}
									/>
								</div>

								<div className="form-group">
									<label htmlFor="email">Email</label>
									<input 
										className="form-control form-control-lg"
										type="email"
										placeholder="Enter Email..."
										name="email"
										defaultValue={email}
										ref={this.emailInput}
									/>
								</div>

								<div className="form-group">
									<label htmlFor="phone">Phone</label>
									<input 
										className="form-control form-control-lg"
										type="text"
										placeholder="Enter Phone..."
										name="phone"
										defaultValue={phone}
										ref={this.phoneInput}
									/>
								</div>
								<input type="submit" 
								value="Add Contact" 
								className="btn btn-light btn-block" />
							</form>
						</div>
					</div>
				</div>
			</div>
		)

	}
}

export default AddSubject;