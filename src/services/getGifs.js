/** @format */

const apiKey = 'IOKixTh0CF2zErhoctHCjTKpJUJN6XAQ';
const baseUrl = 'https://api.giphy.com/v1/gifs/search';

export default function getGifs({ keyWord = 'react' } = {}) {
	const apiUrl = `${baseUrl}?api_key=${apiKey}&q=${keyWord}&limit=10&offset=0&rating=g&lang=es`;
	return fetch(apiUrl)
		.then((res) => res.json())
		.then((response) => {
			const { data } = response;
			const gifs = data.map((image) => {
				const { images, title, id } = image;
				const { url } = images.downsized_medium;
				return { title, id, url };
			});
			return gifs;
		});
}
