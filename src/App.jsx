import './App.css';
import Counter from './views/Counter';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Movie from './views/Movie';
import ToDoList from './views/ToDoList';
import Layout from './views/Layout';
function App() {
	return (
		<>
			<Router>
				<Layout>
					<Routes>
						<Route path="/" element={<Counter />} />
						<Route path="/movie" element={<Movie />} />
						<Route path="/todolist" element={<ToDoList />} />
					</Routes>
				</Layout>
			</Router>
		</>
	);
}

export default App;
