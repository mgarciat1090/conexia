import React, {Component} from 'react';

const Context = React.createContext();

const reducer = (state,action) => {
	switch(action.type){
		case 'DELETE_SUBJECT':
			return {
				...state,
				subjects: state.subjects.filter(subject => subject.id !== action.payload)
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
				area:'Desarrollo',
				interests: 'Biotecnología, Minería, Ciencias de la Salud'
			},
			{
				id:2,
				name:'Rogelio Acebo',
				email: 'racebo@yopmail.com',
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