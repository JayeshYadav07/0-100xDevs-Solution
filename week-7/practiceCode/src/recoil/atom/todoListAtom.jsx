import { atom, selector } from "recoil";
// creation of atom
export const todoListState = atom({
	key: "todoListState",
	default: [],
});

export const filterState = atom({
	key: "filterState",
	default: "",
});

export const inputState = atom({
	key: "inputState",
	default: {
		title: "",
		description: "",
	},
});

export const filteredTodoList = selector({
	key: "filteredTodoList",
	get: ({ get }) => {
		const todoList = get(todoListState);
		const filter = get(filterState);
		return todoList.filter(
			(item) =>
				item.title.toLowerCase().includes(filter.toLowerCase()) ||
				item.description.toLowerCase().includes(filter.toLowerCase())
		);
	},
});
