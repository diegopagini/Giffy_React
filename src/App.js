/** @format */

import { useState, useEffect } from 'react';
import './App.css';

const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=IOKixTh0CF2zErhoctHCjTKpJUJN6XAQ&q=panda&limit=10&offset=0&rating=g&lang=en`;

function App() {
	/* useState to manage the component state, the first parameter is the current state,
	 and the second is the function to change that state */
	const [gifs, setGifs] = useState([]);
	// useEffect is going to execute every time the component is updated
	useEffect(
		() => {
			/* the first parameter is the function we want to execute */
			console.log('effect');
			fetch(apiUrl)
				.then((res) => res.json())
				.then((response) => {
					const { data } = response;
					const gifs = data.map((image) => image.images?.downsized_medium?.url);
					setGifs(gifs); /* this is the function of useState */
				});
		},
		/* the second parameter is the dependencies that determine the effect change */
		[] /* if it has no dependencies, it will run only once */
	);

	return (
		<div className='App'>
			<section className='App-content'>
				{/* {array.map() for loops} */}
				{gifs.map((singleGif, index) => (
					<picture key={index}>
						<img src={singleGif} alt='gif' />
					</picture>
				))}
			</section>
		</div>
	);
}

export default App;
