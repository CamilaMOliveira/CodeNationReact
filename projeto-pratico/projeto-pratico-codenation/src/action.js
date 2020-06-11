export function getData() {
  return {
    type: "GET_DATA"
  };
}

export function setData(result) {
  return {
    type: "SET_DATA",
    payload: result
  };
}

export function setItem(name) {
  return {
    type: "SET_ITEM",
    payload: name
  };
}

export function setSearch(result) {
  return {
    type: "SET_SEARCH",
    payload: result
  };
}

export function addProduct(product, size) {
  return {
    type: "ADD_PRODUCT",
    payload: product,
    size: size
  };
}

export function decrementProduct(product, size) {
  return {
    type: "DECREMENT_PRODUCT",
    payload: product,
    size: size
  };
}

export function removeProduct(product, size) {
  return {
    type: "REMOVE_PRODUCT",
    payload: product,
    size: size
  };
}