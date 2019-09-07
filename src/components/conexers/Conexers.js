import React, { Component } from 'react';
import Subject from './Subject';
import PropTypes from 'prop-types';

import { Consumer } from '../../context';


class Conexers extends Component{

	render(){
		return (
			<Consumer>
				{ value => {
					const { subjects } = value;
					return (
						<div className="container">
			      	<div className="col-sm-12">
			      		<React.Fragment>
			      		{subjects.map(subject => (
			      			<Subject 
			      				key={subject.id}
			      				id={subject.id}
										name={subject.name}
										email={subject.email}
										area={subject.area}
										interests={subject.interests}
										></Subject>
			      		))}
			      		</React.Fragment>
							</div>
						</div>
						
					)
				}}
			</Consumer>
		)
	}



}

Subject.propTypes = {
	
	name: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
	area: PropTypes.string.isRequired,
	interests: PropTypes.string.isRequired

}
export default Conexers;