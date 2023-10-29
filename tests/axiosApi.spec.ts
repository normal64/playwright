import { getAPI, postAPI, deleteAPI, putAPI } from "./src/resources/api-client";
import { test, expect } from "@playwright/test";
import {
  DELETE_SUCCESS_CODE,
  PUT_SUCCESS_CODE,
  POST_SUCCESS_CODE,
  GET_SUCCESS_CODE,
} from "./src/resources/constants";

import { user_data } from "./src/resources/data";

test("API get request", async ({ request }) => {
  const route = "?page=2";
  const response = await getAPI(route);
  console.log(response.data);
  await expect(response.status).toBe(GET_SUCCESS_CODE);
});
test("API post request", async ({ request }) => {
  const route = "/";
  const response = await postAPI(route, user_data.post_data);

  await expect(response.status).toBe(POST_SUCCESS_CODE);
  await expect(response.data.data.name).toContain(
    user_data.post_data.data.name
  );
  await expect(response.data.data.name).not.toBeNull;
  await expect(response.data.data.name).not.toBeUndefined;
});
test("API delete request", async ({ request }) => {
  const route = "/2";
  const response = await deleteAPI(route);
  await expect(response.status).toBe(DELETE_SUCCESS_CODE);
});
test("API put request", async ({ request }) => {
  const route = "/2";
  const response = await putAPI(route, user_data.put_data);
  await expect(response.status).toBe(PUT_SUCCESS_CODE);
  await expect(response.data.data.name).toBe(user_data.put_data.data.name);
});
