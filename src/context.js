import React, {Component} from 'react';

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
			default:
				return state;
	}
}

export class Provider extends Component {

	state = {
		subjects : [
			{
				id: 1,
				name:'Joaquín Acebo',
				email: 'jacebo@yopmail.com',
				phone: '5534567890',
				area:'Desarrollo',
				interests: 'Biotecnología, Minería, Ciencias de la Salud'
			},
			{
				id:2,
				name:'Rogelio Acebo',
				email: 'racebo@yopmail.com',
				phone: '5534567890',
				area:'Producción',
				interests: 'Medios, Comunicación, Ciencia'
			}

		],
		dispatch: (action) => {this.setState(state => reducer(state,action))}

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