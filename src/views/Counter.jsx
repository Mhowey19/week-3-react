import { useState, useEffect } from 'react';

export default function Counter() {
	const [count, setCount] = useState(0);

	return (
		<>
			<button onClick={() => setCount((count) => count + 1)}>Count up</button>
			<p>{count}</p>
			<button onClick={() => setCount((count) => count - 1)}>Count down</button>
		</>
	);
}
