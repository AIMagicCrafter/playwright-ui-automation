export class TodoPage {
  constructor(page) {
    this.page = page;
    this.newTodoInput = page.locator(".new-todo");
    this.todoItems = page.locator('[data-testid="todo-item"]');
    this.activeFilter = page.locator("text=Active");
    this.completedFilter = page.locator("text=Completed");
  }

  async open() {
    await this.page.goto(" ");
  }

  async addTodo(todoText) {
    await this.newTodoInput.fill(todoText);
    await this.newTodoInput.press("Enter");
  }

  async completeTodoByText(todoText) {
    const todoItem = this.todoItems.filter({
      has: this.page.locator('[data-testid="todo-title"]', {
        hasText: todoText,
      }),
    });
    await todoItem.locator(".toggle").check();
  }

  async getTodoCount() {
    return await this.todoItems.count();
  }

  async showActiveTodos() {
    await this.activeFilter.click();
  }

  async showCompletedTodos() {
    await this.completedFilter.click();
  }
}
