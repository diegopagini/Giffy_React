/** @format */

import React from 'react';
import './App.css';
import { ListOfGifs } from './components/ListOfGifs';

function App() {
	return (
		<section className='App-content'>
			<ListOfGifs keyWord='italia' />
		</section>
	);
}

export default App;
