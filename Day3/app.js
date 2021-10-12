//Selectors
const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");

// EventListener
todoBtn.addEventListener("click", appendTodo);
todoList.addEventListener("click", deleteTodo);

// Function

function appendTodo(e) {
  e.preventDefault();
  // Main-Div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  // Main Li
  const todoLi = document.createElement("li");
  todoLi.innerText = todoInput.value;
  todoLi.classList.add("todo-item");
  todoDiv.appendChild(todoLi);
  // Check Btn
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  // Delete Btn
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
  deleteButton.classList.add("delete-btn");
  todoDiv.appendChild(deleteButton);

  // Append to todo list
  todoList.appendChild(todoDiv);
}

function deleteTodo(e) {
  const item = e.target;
  console.log(item);
  if (item.classList[0] === "delete-btn") {
    // console.log("delete")
    const todo = item.parentElement;
    todo.remove();
    // todo.classList.add("fall");
    // todo.addEventListener("transitionend", (e) => {
    //   todo.remove();
    // });
  }

  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
    console.log("completed")
  }
}
