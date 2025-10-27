import { useState } from 'react';

export default function ToDoList() {
	const [task, setTask] = useState('');
	const [tasks, setTasks] = useState([]);
	const [isEditing, setIsEditing] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(null);

	// Handle typing
	const handleChange = (e) => setTask(e.target.value);

	// Add or update task
	const handleAddTask = () => {
		if (task.trim() === '') return;

		if (isEditing) {
			const updatedTasks = tasks.map((t, i) => (i === currentIndex ? { ...t, text: task } : t));
			setTasks(updatedTasks);
			setIsEditing(false);
			setCurrentIndex(null);
		} else {
			setTasks([...tasks, { text: task, completed: false }]);
		}
		setTask('');
	};

	// Toggle completion
	const toggleTask = (index) => {
		const updated = tasks.map((t, i) => (i === index ? { ...t, completed: !t.completed } : t));
		setTasks(updated);
	};

	// Edit task
	const handleEdit = (index) => {
		setTask(tasks[index].text);
		setIsEditing(true);
		setCurrentIndex(index);
	};

	// Delete task
	const handleDelete = (index) => {
		setTasks(tasks.filter((_, i) => i !== index));
	};

	return (
		<div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
			<h2>My To-Do List</h2>

			{/* Input field */}
			<input
				type="text"
				value={task}
				onChange={handleChange}
				placeholder="Enter a task..."
				style={{ width: '70%', padding: '5px' }}
			/>
			<button onClick={handleAddTask} style={{ marginLeft: '10px' }}>
				{isEditing ? 'Update' : 'Add'}
			</button>

			{/* Task list */}
			<ul style={{ listStyleType: 'none', padding: 0, marginTop: '20px' }}>
				{tasks.map((t, index) => (
					<li
						key={index}
						style={{
							marginBottom: '10px',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
						}}
					>
						<div style={{ display: 'flex', alignItems: 'center' }}>
							<input type="checkbox" checked={t.completed} onChange={() => toggleTask(index)} />
							<span
								style={{
									marginLeft: '10px',
									textDecoration: t.completed ? 'line-through' : 'none',
								}}
							>
								{t.text}
							</span>
						</div>

						<div>
							<button onClick={() => handleEdit(index)}>Edit</button>
							<button onClick={() => handleDelete(index)} style={{ marginLeft: '5px' }}>
								Delete
							</button>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
