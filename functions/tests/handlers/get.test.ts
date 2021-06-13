import * as GetHandler from "../../src/handlers/get";
import * as TodoModel from "../../src/models/todo";

describe("handler", () => {
  test("GetHandler.handler", async () => {
    (TodoModel.getTodoById as jest.Mock) = jest.fn().mockReturnValue("dummy");
    const res = await GetHandler.handler({
      pathParameters: {
        todoId: "dummy",
      },
    });
    expect(res).toEqual({
      statusCode: 200,
      body: "dummy",
    });
  });
});
