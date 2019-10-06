import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';

class EditSubject extends Component{
	state = {
		name: '',
		email: '',
		phone: '',
		area: '',
		interests: '',
		errors:{}
	}

	async componentDidMount(){
		const { id } = this.props.match.params;
		const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
		const subject = res.data;
		this.setState({
			name: subject.name,
			email: subject.email,
			phone: subject.phone
		});
	}

	onChange = e => this.setState({ [e.target.name]: e.target.value });
		
	onSubmit = async (dispatch,e) => {
		e.preventDefault();
		const {name,email,phone,area,interests} = this.state;


		if(name === ''){
			this.setState({ errors:{name:'Name is required'} })
			return;
		}

		if(email === ''){
			this.setState({ errors:{email:'Email is required'} })
			return;
		}

		if(phone === ''){
			this.setState({ errors:{phone:'Phone is required'} })
			return;
		}

		if(area === ''){
			this.setState({ errors:{area:'Area is required'} })
			return;
		}

		if(interests === ''){
			this.setState({ errors:{interests:'Interests is required'} })
			return;
		}

		const updSubject = {
			name,
			email,
			phone

		}

		const { id } = this.props.match.params;
		const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`,updSubject);
		dispatch({type:'UPDATE_SUBJECT',payload:res.data});


		// Clear State
		this.setState({
			name: '',
			email: '',
			phone: '',
			area: '',
			interests: '',
			errors : {}
		});

		this.props.history.push('/conexers');

	}

	render(){
		const { name, email, phone,area,interests,errors } = this.state;

		return (
			<Consumer>
				{value => {
					const { dispatch } = value;
					return(
						<div className="container">
							<div className="col-sm-12">
								<div className="card mb-3">
									<div className="card-header">
										Edit Subject
									</div>
									<div className="card-body">
										<form onSubmit={this.onSubmit.bind(this,dispatch)} >
											
											<TextInputGroup 
												label="Name"
												name="name"
												placeholder="Enter Name"
												value={name}
												onChange={this.onChange}
												error={errors.name}
											/>

											<TextInputGroup 
												label="Email"
												name="email"
												placeholder="Enter Email"
												value={email}
												onChange={this.onChange}
												error={errors.email}
											/>

											<TextInputGroup 
												label="Phone"
												name="phone"
												placeholder="Enter Phone"
												value={phone}
												onChange={this.onChange}
												error={errors.phone}
											/>
											
											<TextInputGroup 
												label="Area"
												name="area"
												placeholder="Enter your Work Area"
												value={area}
												onChange={this.onChange}
												error={errors.area}
											/>


											<div className="form-group">
												<label htmlFor="interests">Interests</label>
												<textarea
													className="form-control form-control-lg"
													placeholder="Enter your professional interests"
													name="interests"
													value={interests}
													onChange={this.onChange}
													errors={errors.interests}
													>
												</textarea>
											</div>

											<input type="submit" 
											value="Update Subject" 
											className="btn btn-light btn-block" />
										</form>
									</div>
								</div>
							</div>
						</div>
					)
				}}
			</Consumer>
		)

	}
}

export default EditSubject;