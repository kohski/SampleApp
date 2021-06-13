import * as TodoModel from "../../src/models/todo";
import fetch, { Response } from "node-fetch";
import { mocked } from "ts-jest/utils";

jest.mock("node-fetch");

describe("handler", () => {
  test("GetHandler.handler", async () => {
    mocked(fetch).mockImplementation(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            userId: 1,
            id: 1,
            title: "delectus aut autem",
            completed: false,
          }),
      } as Response)
    );

    const res = await TodoModel.getTodoById("1");
    expect(res).toEqual({
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    });
  });
});
