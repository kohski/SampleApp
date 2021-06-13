import { handler } from "../src/get";

test("first test", async () => {
  const res = await handler("dummy");
  expect(res).toEqual("dummy");
});
