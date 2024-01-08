const toDoForm = document.getElementById("todo-form");
const toDoInput =toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function deleteTodo(event) {
    const li = event.target.parentElement;
    console.log(`${event.target.parentElement.innerText} is done!`);
    li.remove();

    // 어디에 속해있는지 거슬러올라가서 확인한다음 그걸 지워줄 것임. 
}


function paintTodo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "❀";
    button.addEventListener("click", deleteTodo);
    span.innerText = newTodo;
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    paintTodo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);