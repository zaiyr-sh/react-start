import React from 'react';
import CountryContainer from './container/CountryContainer';

function App() {
	return (
		<div className="App">
			
			<CountryContainer />
		</div>
	);
}

export default App;

// import React, { Component } from 'react';
// import CountryContainer from './container/CountryContainer';

// import Modal from './component/Modal/Modal';

// class App extends Component {

//     constructor() {
//         super();

//         this.state = {
//             isShowing: false
//         }
//     }

//     openModalHandler = () => {
//         this.setState({
//             isShowing: true
//         });
//     }

//     closeModalHandler = () => {
//         this.setState({
//             isShowing: false
//         });
//     }

//     render () {
//         return (
			
//             <div>
// 				<div className="App">
// 					<CountryContainer />
// 				</div>
//                 { this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }

//                 <button className="open-modal-btn" onClick={this.openModalHandler}>Open Modal</button>

//                 <Modal
//                     className="modal"
//                     show={this.state.isShowing}
//                     close={this.closeModalHandler}
//                     > Some Text
//                 </Modal>
//             </div>
//         );
//     }
// }

// export default App;
