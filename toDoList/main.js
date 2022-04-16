const gorevEkle = document.querySelector(".btn-add");
const list = document.querySelector(".toDoList");
gorevEkle.addEventListener("click", clickEvent);
const eventEnter = document.querySelector(".input-list");

eventEnter.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    saveData();
  }
});

function firstOpen() {
  let items = getItems();
  items.forEach((element) => {
    initList(element);
  });
}

function clickEvent(e) {
  saveData();
}

function initList(text) {
  const list = document.querySelector(".toDoList");
  const task = document.createElement("div");
  task.classList.add("task");
  const taskText = document.createElement("li");
  taskText.classList.add("task-text");
  const buttonAdd = document.createElement("button");
  const buttonTrash = document.createElement("button");
  buttonAdd.innerHTML = '<i class="fas fa-check"></i>';
  buttonAdd.classList.add("button-type");
  buttonAdd.classList.add("btn-check");
  buttonTrash.innerHTML = '<i class="fas fa-trash"></i>';
  buttonTrash.classList.add("button-type");
  buttonTrash.classList.add("btn-delete");
  task.appendChild(taskText);
  task.appendChild(buttonAdd);
  task.appendChild(buttonTrash);
  taskText.innerText = text;
  document.querySelector(".input-list").value = "";
  list.appendChild(task);
  eventEnter.focus();
}

list.addEventListener("click", addRemoveEvent);
function addRemoveEvent(e) {
  const tiklananEleman = e.target;
  if (tiklananEleman.classList.contains("btn-delete")) {
    deleteItemOnList(tiklananEleman.parentElement);
  } else if (tiklananEleman.classList.contains("btn-check")) {
    checkItem(tiklananEleman.parentElement);
  }
}

function saveData() {
  const text = document.querySelector(".input-list").value;
  if (text.length > 0) {
    initList(text);
    saveItem(text);
  } else {
    alert("Lütfen boş değer girmeyin");
  }
}
