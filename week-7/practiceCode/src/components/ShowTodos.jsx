import { useRecoilValue } from "recoil";
import { todoListAtom } from "../recoil/atom/todoListAtom";

export default function ShowTodos() {
	const todoList = useRecoilValue(todoListAtom);
	return (
		<div>
			{todoList.map((todoItem) => (
				<p key={todoItem.id}>{todoItem.todo}</p>
			))}
		</div>
	);
}
