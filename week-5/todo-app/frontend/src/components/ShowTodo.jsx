/* eslint-disable react/prop-types */
export function ShowTodo({ todos }) {
	return (
		<>
			<table border={1}>
				<thead>
					<tr>
						<td>Title</td>
						<td>Description</td>
						<td>Completed</td>
					</tr>
				</thead>
				<tbody>
					{todos.map((todo, index) => {
						return (
							<tr key={index}>
								<td>{todo.title}</td>
								<td>{todo.desc}</td>
								<td>{todo.completed ? "Completed" : "Not completed"}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
}
