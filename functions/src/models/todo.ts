import fetch from "node-fetch";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const getTodoById = async (todoId: string): Promise<Todo> => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`
  );
  const todoItem = await res.json() as Todo
  return todoItem
};
