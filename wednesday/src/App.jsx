import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import About from './pages/About'
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Posts from './pages/Posts';

import Nav from './components/Nav';

export default function App() {
	return(
		<>
			<Nav />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/Posts" element={<Posts />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
}

