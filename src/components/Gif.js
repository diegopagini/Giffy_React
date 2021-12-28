/** @format */

import React from 'react';

export const Gif = ({ title, id, url }) => {
	return (
		<picture>
			<img src={url} alt={title} loading='lazy' />
			<figcaption>{title}</figcaption>
		</picture>
	);
};
