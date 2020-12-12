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
						<div className='wrapper'>
							<h1 className="devtechno">DEV.TECHNO</h1>
						</div>
						<div className='site-links'>
							<a className='link-item' href="https://www.rainerb.ml">HOME</a>
							<a className='link-item' href="https://www.rainerb.ml/#/about">ABOUT</a>
							<a className='link-item' href="https://klvsmusic.bandcamp.com/">BANDCAMP</a>
							<a className='link-item' href="https://www.obskurmusic.co/">OBSKUR MUSIC [LABEL]</a>
							<span></span>
						</div>
					</header>
					<main>
						<div className='post-container'>
							<Posts posts={this.state.posts} />
						</div>
					</main>
				</div>
			</div>
		);
	}
}

export default App;
