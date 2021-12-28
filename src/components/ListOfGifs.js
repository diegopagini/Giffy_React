/** @format */

import React, { useEffect, useState } from 'react';
import getGifs from '../services/getGifs';
import { Gif } from './Gif';

export const ListOfGifs = ({ keyWord }) => {
	/* useState to manage the component state, the first parameter is the current state,
	 and the second is the function to change that state */
	const [gifs, setGifs] = useState([]);

	// useEffect is going to execute every time the component is updated
	useEffect(
		() => {
			/* the first parameter is the function we want to execute */
			getGifs({ keyWord }).then((gifs) => setGifs(gifs));
		},
		/* the second parameter is the dependencies that determine the effect change */
		[keyWord] /* if it has no dependencies, it will run only once */
		/* In this case we have one dependency and the component will rerender if that dependencies change */
	);

	return (
		/*	{ {array.map() for loops} }*/
		gifs.map(({ id, title, url }) => (
			/* Custom component */
			<Gif key={id} title={title} id={id} url={url} />
		))
	);
};
