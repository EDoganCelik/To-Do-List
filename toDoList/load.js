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
let list  = getItems();
  console.log(index);
  console.log(getItems());
  list.splice(index, 1);
  localStorage.setItem("items", JSON.stringify(list));
  console.log('tets');
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
    item.classList.toggle('checking');
}
