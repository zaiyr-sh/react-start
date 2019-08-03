import React, { Component } from 'react';
import Country from '../component/Country';
import './CountryContainer.css';

class CountryContainer extends Component {
	// state = {
	// 	data: [],
	// 	nameCountry: ""
		
	// };

	constructor(){
		super();
		this.state = {
			data: [],
			nameCountry: '',
			
		};
	}
	
	handleNameChange = (event) => {
		this.setState({ nameCountry: event.target.value });
	};

	componentWillMount = () => {
		fetch('https://restcountries.eu/rest/v2/all')
			.then((response) => response.json())
			.then((result) => this.setState({ data: result }))
			.catch((err) => console.log(err));
	};

	deleteCountry = (index) => {
		let dataCountry = this.state.data;
		dataCountry.splice(index,1);
		this.setState({data: dataCountry})
	}

	onSubmit(e) {
        e.preventDefault();
        var title = this.title;
        console.log(title);
    }

	render() {
		return (
			<div className="country-list">

				<div className="Table">
					<div className="Cell Cell--main">
						<p>Code</p>
					</div>
					<div className="Cell Cell--main">
						<p>Flag</p>
					</div>
					<div className="Cell Cell--main">
						<p>Country</p>
					</div>
					<div className="Cell Cell--main">
						<p>Capital</p>
					</div>
					<div className="Cell Cell--main">
						<p>Population</p>
					</div>
				</div>

				{this.state.data.map((item, index) => {
					if(item.name === this.state.nameCountry) {
						return(
							<Country
								deleteCountryFunc={() => this.deleteCountry(index)} 
								key={index} 
								data={item} 
							/>
						);
					} else if (this.state.nameCountry === '') {
						return(
							<Country
								deleteCountryFunc={() => this.deleteCountry(index)} 
								key={index} 
								data={item} 
							/>
						);
					} 
				})}

				<div class="content">
					<div class="form-wrapper">
						<div class="linker"> 
						<span class="ring"></span>
						<span class="ring"></span>
						<span class="ring"></span>
						<span class="ring"></span>
						<span class="ring"></span>
						</div>
						<form class="login-form" action="#" method="post">
						
						<input type="text" name="password"  value={this.state.nameCountry} onChange={this.handleNameChange} placeholder="Введите название страны"/>
						{/* <button onClick={this.state.nameCountry}>ВОЙТИ</button> */}
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default CountryContainer;
