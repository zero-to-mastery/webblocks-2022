const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');
const left = document.querySelector('.left');

let items = [];

function mirrorToLocalStorage() {
  localStorage.setItem('items', JSON.stringify(items));
}

function restoreFromLocalStorage() {
  const IsItems = JSON.parse(localStorage.getItem('items'));

  if (IsItems.length) {
    items.push(...IsItems);
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
  }
}

function handleSubmit(e) {
  e.preventDefault();
  const name = e.currentTarget.item.value;

  if (!name) return;

  const item = {
    name,
    id: Date.now(),
    complete: false,
  };
  items.push(item);
  e.target.reset();
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function displayItems() {
  const html = items
    .map(
      (item) => `<li class="shopping-item">
      <input type="checkbox" value="${item.id}" ${item.complete && 'checked'}>
      <span class="itemName">${item.name}</span>
      <button aria-label="Remove ${item.name}" value="${
        item.id
      }">&times;</button>
      </li>`
    )
    .join('');
  list.innerHTML = html;

  left.innerHTML =
    items.length === 0
      ? 'Shopping today? Add new item'
      : items.length > 1
      ? items.length + ' items left'
      : items.length + ' item left';
}

function deleteItem(id) {
  items = items.filter((item) => item.id !== id);
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function markAsComplete(id) {
  const itemRef = items.find((item) => item.id === id);
  itemRef.complete = !itemRef.complete;

  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

list.addEventListener('itemsUpdated', displayItems);

list.addEventListener('itemsUpdated', mirrorToLocalStorage);

shoppingForm.addEventListener('submit', handleSubmit);

list.addEventListener('click', (e) => {
  const id = parseInt(e.target.value);

  if (e.target.matches('button')) {
    console.log(deleteItem(id));
  }

  if (e.target.matches('input[type="checkbox"]')) {
    markAsComplete(id);
  }
});

restoreFromLocalStorage();
