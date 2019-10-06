import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Subject.css'
import PropTypes from 'prop-types';
import { Consumer } from '../../context';
import axios from 'axios';

class Subject extends Component{
	state = {
		showContactInfo: false

	};

	onDeleteClick = async (id,dispatch) => {
		try{
			await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
			dispatch({type:'DELETE_SUBJECT',payload:id})
		}catch(e){
			dispatch({type:'DELETE_SUBJECT',payload:id})
		}
	}

	onShowClick = () => {
		this.setState({ showContactInfo: !this.state.showContactInfo })
	}

	render(){
		const { showContactInfo } = this.state;
		return (

				<Consumer>
					{value => {
						const { dispatch } = value;
						return (
							<div className="card card-body mb-3">
								<h3>{this.props.name} <i onClick={this.onShowClick} 
									className="fas fa-sort-down"
									style={{cursor: 'pointer'}}
									></i>	
									<i className="fas fa-times" style={{
										cursor:'pointer',
										float:'right',
										color:'red'}}
										onClick={this.onDeleteClick.bind(this,this.props.id,dispatch)}
									></i>
									
									<Link to={`/edit/${this.props.id}`}>
										<i 
											className="fas fa-pencil-alt"
											style={{
												cursor: 'pointer',
												float: 'right',
												color: 'black',
												marginRight: '1rem'
											}}
											></i>
									</Link>

									</h3>
								{ showContactInfo ? (
										<ul className="list-group">
											<li className="list-group-item">Email: {this.props.email}
											</li>
											<li className="list-group-item">Phone: {this.props.phone}
											</li>
											<li className="list-group-item">Area: {this.props.area}
											</li>
											<li className="list-group-item">Intereses: {this.props.interests}
											</li>
										</ul>
									):null}
							</div>

						)
					}}
				</Consumer>

			)
	}

}

Subject.propTypes = {
	contact:PropTypes.object.isRequired
}

export default Subject;