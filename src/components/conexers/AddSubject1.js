import React, { Component } from 'react';

class AddSubject extends Component{
	state = {
		name: '',
		email: '',
		phone: ''
	}

	onChange = e => this.setState({ [e.target.name]: e.target.value });
		
	onSubmit = (e) => {
		e.preventDefault();
		console.log(this.state);
	}

	render(){
		const { name, email, phone } = this.state;
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
										value={name}
										onChange={this.onChange}
									/>
								</div>

								<div className="form-group">
									<label htmlFor="email">Email</label>
									<input 
										className="form-control form-control-lg"
										type="email"
										placeholder="Enter Email..."
										name="email"
										value={email}
										onChange={this.onChange}
									/>
								</div>

								<div className="form-group">
									<label htmlFor="phone">Phone</label>
									<input 
										className="form-control form-control-lg"
										type="text"
										placeholder="Enter Phone..."
										name="phone"
										value={phone}
										onChange={this.onChange}
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