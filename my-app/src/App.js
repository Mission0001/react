import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
  } from "react-router-dom";
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/Pages/home';
import Menu from './components/Pages/menu';
import About from './components/Pages/about';
import Contact from './components/Pages/contact';
import Error from './components/Pages/error';
import './css/main.css';

function App() {
	return (
		<div>
<Router>
	<Header />		
<Routes>
	<Route path="/" element={<Home/>}/>
	<Route path="/menu" element={<Menu/>}/>
	<Route path="/about" element={<About/>}/>
	<Route path="/contact" element={<Contact/>}/>
	<Route path="*" element={<Error/>} />
</Routes>
<Footer />
</Router>
	
</div>
	);
}

export default App;
