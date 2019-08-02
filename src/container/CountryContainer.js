import React, { Component } from 'react';
import Country from '../component/Country';
import './CountryContainer.css';

class CountryContainer extends Component {
	state = {
		data: []
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

				{this.state.data.map((item, index) => <Country deleteCountryFunc={() => this.deleteCountry(index)} key={index} data={item} />)}
				
				<input id="country-name" value={this.state.value} type="text" />
				<button id="show" value="Submit">
					Show information
				</button>
			</div>
		);
	}
}

export default CountryContainer;
