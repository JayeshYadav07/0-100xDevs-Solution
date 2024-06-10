import TodoList from "./TodoList";
import useSWR from "swr";
const fetcher = (url: string | URL | Request) =>
    fetch(url).then((res) => res.json());
export default function Todo() {
    const { data, error } = useSWR("/api/todos", fetcher, {
        revalidateOnFocus: false, // Disable revalidation on focus
        revalidateOnReconnect: false, // Disable revalidation on reconnect
        refreshInterval: 0, // Disable automatic interval revalidation
    });

    if (error) {
        return <p>Failed to fetch</p>;
    }

    return (
        <div className="my-4">
            {data?.success &&
                data.todos.map((todo: TodoProps) => (
                    <TodoList key={todo.id} {...todo} />
                ))}
        </div>
    );
}
