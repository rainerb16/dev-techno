import React from 'react';
import './App.css';
import { client } from './client';
import Posts from './components/Posts';

class App extends React.Component {
	state = {
		posts: []
	}

	componentDidMount() {
		client.getEntries()
			.then((response) => {
				console.log(response)
				this.setState({
					posts: response.items
				})
			})
			.catch(console.error)
	}

	render() {
		return (
			<div className="App">
				<div className="main-container">
					<header>
						<div className="wrapper">
							<h1>DEV.TECHNO</h1>
						</div>
					</header>
					<main>
						<div className="post-container">
							<Posts posts={this.state.posts} />
						</div>
					</main>
				</div>
			</div>
		);
	}
}

export default App;
