/** @format */

import React, { useState } from 'react';
import { Route } from 'wouter';
import './App.css';
import { Gif } from './components/Gif';
import { ListOfGifs } from './components/ListOfGifs';

export default function App() {
	const [inputValue, setInputValue] = useState('');

	const handleChange = (e) => {
		setInputValue(e.target.value);
	};

	return (
		<section className='App-content'>
			<div className='search'>
				<label htmlFor='search'>Buscar Gifs</label>
				<input
					id='search'
					type='text'
					placeholder='Buscar Gifs'
					onChange={handleChange}
				/>
			</div>
			{/* Custom Component */}
			<ListOfGifs keyWord={inputValue} />
			{/* <Route path='gif/:id' component={Gif} /> */}
		</section>
	);
}
