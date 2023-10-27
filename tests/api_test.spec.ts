import { test, expect } from "@playwright/test";
test("API DELETE request", async ({ request }) => {
  const response = await request.delete("https://reqres.in/api/users/2", {
    data: {
      name: "Dean",
      job: "QA",
    },
  });
  await expect(response.status()).toBe(204);
});
test("API PUT request", async ({ request }) => {
  const response = await request.put("https://reqres.in/api/users/2", {
    data: {
      name: "Dean",
      job: "QA",
    },
  });
  await expect(response.status()).toBe(200);
  const text = await response.text();
  await expect(text).toContain("Dean");
});
test("API post request", async ({ request }) => {
  const response = await request.post("https://reqres.in/api/users", {
    data: {
      name: "Dean",
      job: "QA",
    },
  });
  await expect(response.status()).toBe(201);
  const text = await response.text();
  await expect(text).toContain("Dean");
});
test("API get request", async ({ request }) => {
  const response = await request.get("https://reqres.in/api/users?page=2");
  await expect(response.status()).toBe(200);
  const text = await response.text();
  await expect(text).toContain("Lindsay");
  console.log(await response.json());
});
