import { getTodoById } from '../models/todo'

export interface Event {
  pathParameters: {
    todoId: string
  }
}

export interface LambdaResponse {
  statusCode: number,
  body: string
}

export const handler = async (event: Event): Promise<LambdaResponse> => {
  const todoId = event.pathParameters.todoId
  const todoItem = await getTodoById(todoId)
  return {
    statusCode: 200,
    body: todoItem
  }
}