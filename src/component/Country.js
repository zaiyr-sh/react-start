import React from 'react';
import './ModalWindow.css';

class Country extends React.Component {
	state = {
		isShowed: false
	}
	
	toggleShow = () => {
		this.setState({isShowed: !this.state.isShowed});
	}
	
	render() {
		const modal = () => {
			if(this.state.isShowed) {
				return(
					<div id="myModal" className="modal">
						<div className="modal-content">
							<span onClick={this.toggleShow} className="close">&times;</span>
							<img className="imgFlag" src={this.props.data.flag}></img>
							<div className="countryData">
								<div><strong>Region:</strong> {this.props.data.region}</div>
								<div><strong>Subregion:</strong> {this.props.data.subregion}</div>
								<div><strong>Language:</strong> {this.props.data.languages[0].name}</div>
								<div><strong>Language Native Name:</strong> {this.props.data.languages[0].nativeName} </div>
								<div><strong>Time Zone:</strong> {this.props.data.timezones} </div>
								<div><strong>Calling Code:</strong> {this.props.data.callingCodes}</div>
								<div><strong>Top Level Domain:</strong> {this.props.data.topLevelDomain}</div>
							</div>
						</div>
					</div>
				);
			}
		}
		return (
			<>
			<body>
			{modal()}
			
			<div className="Table">	
				<div className="Row">
					<div className="Cell">
						<p>{this.props.data.alpha2Code}</p>
						<button onClick={this.props.deleteCountryFunc}>Delete</button>
						<button id="myBtn" onClick={this.toggleShow}>Open Modal</button>
					</div>
					<div className="Cell">
						<p><img alt={this.props.data.name} src={this.props.data.flag} /></p>
					</div>
					<div className="Cell">
						<p>{this.props.data.name}</p>
					</div>
					<div className="Cell">
						<p>{this.props.data.capital}</p>
					</div>
					<div className="Cell">
						<p>{this.props.data.population} people</p>
					</div>
				</div>
			</div>	
			</body>
			</>
		);
	}
	
}

export default Country;
