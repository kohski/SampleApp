import * as GetHandler from "../../src/handlers/get";
import * as TodoModel from "../../src/models/todo";

describe("handler", () => {
  test("GetHandler.handler", async () => {
    (TodoModel.getTodoById as jest.Mock) = jest.fn().mockReturnValue({
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    });
    const res = await GetHandler.handler({
      pathParameters: {
        todoId: "1",
      },
    });
    expect(res).toEqual({
      statusCode: 200,
      body: JSON.stringify({
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false,
      }),
    });
  });
});
