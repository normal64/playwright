import { test, expect } from "@playwright/test";
import {
  POST_SUCCESS_CODE,
  GET_SUCCESS_CODE,
  PUT_SUCCESS_CODE,
  DELETE_SUCCESS_CODE,
  POST_FAILED_CODE
} from "./src/resources/constants";
import {
  GET_URL,
  DELETE_URL,
  PUT_URL,
  POST_URL,
  REGISTER_URL,
} from "./src/resources/api_data";
import { user_data } from "./src/resources/data";

test("API DELETE request", async ({ request }) => {
  const response = await request.delete(DELETE_URL, user_data.delete_data);
  await expect(response.status()).toBe(DELETE_SUCCESS_CODE);
});
test("API PUT request", async ({ request }) => {
  const response = await request.put(PUT_URL, user_data.put_data);
  await expect(response.status()).toBe(PUT_SUCCESS_CODE);
  const text = await response.text();
  await expect(text).toContain("Dean");
});
test("API post request", async ({ request }) => {
  const response = await request.post(POST_URL, user_data.post_data);
  await expect(response.status()).toBe(POST_SUCCESS_CODE);
  const text = await response.text();
  await expect(text).toContain("Dean");
});
test("API get request", async ({ request }) => {
  const response = await request.get(GET_URL);
  await expect(response.status()).toBe(GET_SUCCESS_CODE);
  const text = await response.text();
  await expect(text).toContain("Lindsay");
  
});
test("API post failed registration", async ({ request }) => {
  const response = await request.post(REGISTER_URL,user_data.failed_registration_post_data);
  await expect(response.status()).toBe(POST_FAILED_CODE);
  const text = await response.text();
  await expect(text).toContain("Missing password");
  
});
