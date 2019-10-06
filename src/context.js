import React, {Component} from 'react';
import axios from 'axios';

const Context = React.createContext();

const reducer = (state,action) => {
	switch(action.type){
		case 'DELETE_SUBJECT':
			return {
				...state,
				subjects: state.subjects.filter(subject => subject.id !== action.payload)
			};
		case 'ADD_SUBJECT':
			return {
				...state,
				subjects: [action.payload,
				...state.subjects]
			};
		case 'UPDATE_SUBJECT':
			return {
				...state,
				subjects: state.subjects.map(subject => 
					subject.id === action.payload.id ? (subject = action.payload):subject)
			}
			default:
				return state;
	}
}

export class Provider extends Component {

	state = {
		subjects : [],
		dispatch: (action) => {this.setState(state => reducer(state,action))}

	}

	async componentDidMount(){
		const res = await axios.get('https://jsonplaceholder.typicode.com/users');

		this.setState({ subjects : res.data });
	}

	render(){
		return (
			<Context.Provider value={this.state}>
				{ this.props.children }
			</Context.Provider>
		)
	}
}

export const Consumer = Context.Consumer;