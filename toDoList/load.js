function getItems() {
  let items;
  if (localStorage.getItem("items") == null) {
    items = [];
  } else {
    items = JSON.parse(localStorage.getItem("items"));
  }
  return items;
}

function saveItem(item) {
  let items = getItems();
  items.push(item);
  localStorage.setItem("items", JSON.stringify(items));
}

function deleteItem(index) {
  let list = getItems();
  console.log(index);
  console.log(getItems());
  list.splice(index, 1);
  localStorage.setItem("items", JSON.stringify(list));
  console.log("tets");
}
function deleteItemOnList(element) {
  const item = element;
  item.classList.add("kaybol");
  item.addEventListener("transitionend", () => {
    item.remove();
  });
  let index = getItems().indexOf(item.children[0].innerText);
  deleteItem(index);
}
function checkItem(element) {
  const item = element;
  
  item.classList.toggle("checking");
  let index = getItems().indexOf(item.children[0].innerText);

  if (item.classList.contains("checking")) {
    saveCheckItem(index, 1);
  } else {
    saveCheckItem(index, 0);
  }
}
function saveCheckItem(index, number) {
  let items = getCheckItems();
  items[index] = number;
  console.log(items);
  localStorage.setItem("check", JSON.stringify(items));
}
function getCheckItems() {
  let items;
  if (localStorage.getItem("check") == null) {
    items = [];
  } else {
    items = JSON.parse(localStorage.getItem("check"));
  }
  return items;
}
