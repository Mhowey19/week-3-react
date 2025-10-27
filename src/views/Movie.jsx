import { useState } from 'react';

export default function Movie() {
	const [movies, setMovies] = useState([]);
	const [movieName, setMovieName] = useState('');

	const handleUserInput = async (e) => {
		e.preventDefault();
		if (!movieName.trim()) return;

		const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
			movieName
		)}&include_adult=false&language=en-US&page=1`;

		const options = {
			method: 'GET',
			headers: {
				accept: 'application/json',
				Authorization: `Bearer ${import.meta.env.VITE_APIKEY}`,
			},
		};

		try {
			const res = await fetch(url, options);
			const json = await res.json();

			if (!json.results) return;

			setMovies(
				json.results.slice(0, 10).map((data) => ({
					id: data.id,
					title: data.title,
					img: data.poster_path,
					overview: data.overview,
				}))
			);
		} catch (err) {
			console.error('Error fetching movies:', err);
		}
	};

	return (
		<div style={{ padding: '20px' }}>
			<h2>Movie Search</h2>
			<form onSubmit={handleUserInput}>
				<input
					type="text"
					placeholder="Search for a movie..."
					value={movieName}
					onChange={(e) => setMovieName(e.target.value)}
					style={{ marginRight: '10px' }}
				/>
				<button type="submit">Search</button>
			</form>

			<div style={{ marginTop: '20px' }}>
				{movies.length === 0 ? (
					<p>No movies found.</p>
				) : (
					movies.map((movie) => (
						<div key={movie.id} style={{ marginBottom: '20px' }}>
							<img
								src={`https://image.tmdb.org/t/p/w200${movie.img}`}
								alt={movie.title}
								style={{ borderRadius: '8px' }}
							/>
							<h3>{movie.title}</h3>
							<p>{movie.overview}</p>
						</div>
					))
				)}
			</div>
		</div>
	);
}
