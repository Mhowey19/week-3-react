import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<header>
			<nav>
				<Link to="/">Counter</Link>
				<Link to="/movie">Movie</Link>
				<Link to="/todolist">To Do List</Link>
			</nav>
		</header>
	);
}
