import { test, expect } from "@playwright/test";
import { TodoPage } from "../../pages/todo.page.js";
import { todo } from "node:test";

test("User can filter active and completed todo items", async ({ page }) => {
  const todoPage = new TodoPage(page);
  const activeTask = "Active Task";
  const completedTask = "Completed Task";
  await todoPage.open();
  await todoPage.addTodo(activeTask);
  await todoPage.addTodo(completedTask);
  await todoPage.completeTodoByText(completedTask);

  //Validate Active filter
  await todoPage.showActiveTodos();
  expect(await todoPage.getTodoCount()).toBe(1);

  //Validate Completed filter
  await todoPage.showCompletedTodos();
  expect(await todoPage.getTodoCount()).toBe(1);
});
