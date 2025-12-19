import { test, expect } from "@playwright/test";
import { TodoPage } from "../../pages/todo.page";

test("User can create and complete a todo item", async ({ page }) => {
  const todoPage = new TodoPage(page);
  const taskName = "Prepare Playwright Framework";
  await todoPage.open();
  await todoPage.addTodo(taskName);
  await todoPage.completeTodoByText(taskName);
  const count = await todoPage.getTodoCount();
  expect(count).toBe(1);
});
