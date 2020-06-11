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
  console.log(`Action setItem(${name}) `);
  return {
    type: "SET_ITEM",
    payload: name
  };
}

export function setSearch(result) {
  console.log(`Action setSearch(${result}) `);
  return {
    type: "SET_SEARCH",
    payload: result
  };
}

export function addProduct(product, size) {
  console.log(`Action addProduct => ${product} `);
  console.log(`Action addProduct Size => ${size} `);
  return {
    type: "ADD_PRODUCT",
    payload: product,
    size: size
  };
}

export function decrementProduct(product, size) {
  console.log(`Action decrementProduct => ${product} `);
  console.log(`Action decrementProduct Size => ${size} `);
  return {
    type: "DECREMENT_PRODUCT",
    payload: product,
    size: size
  };
}

export function removeProduct(product, size) {
  console.log(`Action removeProduct => ${product} `);
  console.log(`Action removeProduct Size => ${size} `);
  return {
    type: "REMOVE_PRODUCT",
    payload: product,
    size: size
  };
}