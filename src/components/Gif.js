/** @format */

import React from 'react';
import { Link } from 'wouter';
import './Gif.css';

export const Gif = ({ title, id, url }) => {
	return (
		/* This is like routerLink in Angular */
		<Link to={`/gif/${id}`} className='Gif'>
			<picture>
				<img src={url} alt={title} loading='lazy' />
				<figcaption>{title}</figcaption>
			</picture>
		</Link>
	);
};
