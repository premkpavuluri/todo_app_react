import OPERATIONS from "../constants/operations";

const STATUS = {
  DUE: "due",
  COMPLETED: "completed"
}

const initItems = [
  {id: 0, text: "Learn React", status: STATUS.DUE},
  {id: 1, text: "Learn JavaScript", status: STATUS.COMPLETED}
];

const initialTodo = {
  nextItemId: 2,
  items: initItems
}

const addItem = (items, text, id) => {
  return [...items, {id, text, status: STATUS.DUE}];
}

const deleteItem = (items, id) => {
  return items.filter(({id: itemId}) => itemId !== id);
}

const editItem = (items, id, text) => {
  return items.map(item => item.id === id ? {...item, text} : item);
}

const toggleStatus = (items, id) => {
  return items.map(item => {
    if (item.id === id) {
      return {...item, status: item.status === STATUS.DUE ? STATUS.COMPLETED : STATUS.DUE};
    }
    return item;
  });
}

const todoReducer = ({nextItemId, items}, {type, id, text}) => {
  switch (type) {
    case OPERATIONS.ADD:
      return {nextItemId: nextItemId + 1, items: addItem(items, text, nextItemId)};
    case OPERATIONS.DELETE:
      return {nextItemId, items: deleteItem(items, id)}
    case OPERATIONS.EDIT:
      return {nextItemId, items: editItem(items, id, text)};
    case OPERATIONS.TOGGLE_STATUS:
      return {nextItemId: nextItemId, items: toggleStatus(items, id)};
    default:
      return {nextItemId, items};
  }
}

export {todoReducer, initialTodo};