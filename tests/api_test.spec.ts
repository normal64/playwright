import { test, expect } from "@playwright/test";
import {
  POST_SUCCESS_CODE,
  GET_SUCCESS_CODE,
  PUT_SUCCESS_CODE,
  DELETE_SUCCESS_CODE,
} from "./src/resources/constants";
import {GET_URL,DELETE_URL,PUT_URL,POST_URL} from "./src/resources/api_data"
test("API DELETE request", async ({ request }) => {
  const response = await request.delete(DELETE_URL, {
    data: {
      name: "Dean",
      job: "QA",
    },
  });
  await expect(response.status()).toBe(DELETE_SUCCESS_CODE);
});
test("API PUT request", async ({ request }) => {
  const response = await request.put(PUT_URL, {
    data: {
      name: "Dean",
      job: "QA",
    },
  });
  await expect(response.status()).toBe(PUT_SUCCESS_CODE);
  const text = await response.text();
  await expect(text).toContain("Dean");
});
test("API post request", async ({ request }) => {
  const response = await request.post(POST_URL, {
    data: {
      name: "Dean",
      job: "QA",
    },
  });
  await expect(response.status()).toBe(POST_SUCCESS_CODE);
  const text = await response.text();
  await expect(text).toContain("Dean");
});
test("API get request", async ({ request }) => {
  const response = await request.get(GET_URL);
  await expect(response.status()).toBe(200);
  const text = await response.text();
  await expect(text).toContain("Lindsay");
  console.log(await response.json());
});
