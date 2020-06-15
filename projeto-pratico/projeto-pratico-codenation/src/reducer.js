const INITIAL_STATE = {
  data: [],
  item: {},
  search: [],
  cart: [],
  cartTotalItems: 0,
  cartTotalPrice: 0
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {

    case "GET_DATA":
      return {
        ...state
      };

      case "SET_DATA":
        return {
          ...state,
          data: action.payload,
        };

      case "SET_ITEM":
        return {
          ...state,
          item: state.data.find(product => product.name === action.payload),
        }

        case "SET_SEARCH":
          let searchResults = [];
          state.data.map(product => {
            if(product.name !== undefined) {
              /* If what the user searched, exists in any product */
              if(product.name.toLowerCase().indexOf(action.payload.toLowerCase()) !== -1){
                /* Let's update the list of searched products */
                searchResults.push(product);
              }
            }
          });

          return {
            ...state,
            search: searchResults,
          }

          case "ADD_PRODUCT":
            let index;
            let actualPrice = 0;
            let number = 0;
            /* Try to find if the item we want to add,
            (and in the size we want to add), alredy exists in our cart */
            index = state.cart.findIndex(product => 
              product.item.name === action.payload.name
              &&
              product.size === action.size);

            /* Extract the price from "R$ 199,90" for example. Result will be "199,90" */
            actualPrice = action.payload.actual_price.match(/\d+(?:\.\d+)?/g);
            /* Convert this to string in order to replace comma with dots => 199.9 */
            /* And parse this result to Float */
            number = parseFloat(actualPrice.toString().replace(',', '.'));

            if(index === -1) {
              /* It's a new item, let's add it to the cart */
              state.cart.push({"count_item":`${1}`, "size":action.size, "total_price":number,
                "item":action.payload});
            } else {
              /* The item already exists in the cart, let's just increment its number */
              state.cart[index].count_item++;
              state.cart[index].total_price+=number;
            }

            return {
              ...state,
              cartTotalItems: state.cartTotalItems+1,
              cartTotalPrice: state.cartTotalPrice+number,
            }

            case "DECREMENT_PRODUCT":
              let itemIndex;
              let price = 0;
              let actual = 0;
              /* Get index from the item we want to remove */
              itemIndex = state.cart.findIndex(product => 
                product.item.name === action.payload.name
                &&
                product.size === action.size);

                /* If the item exists in the cart and we have more than one */
              if((itemIndex !== -1) && (state.cart[itemIndex].count_item > 1)) {
                /* Let's decrement its counter and the total items counter */
                state.cart[itemIndex].count_item--;
                state.cartTotalItems--;

                actual = action.payload.actual_price.match(/\d+(?:\.\d+)?/g);
                /* Convert this to string in order to replace comma with dots => 199.9 */
                /* And parse this result to Float */
                price = parseFloat(actual.toString().replace(',', '.'));
                state.cartTotalPrice -= price;
                state.cart[itemIndex].total_price -= price;
              }

              return {
                ...state
              }

              case "REMOVE_PRODUCT":
                let removeIndex;
                /* Get index from the item we want to remove */
                removeIndex = state.cart.findIndex(product => 
                  product.item.name === action.payload.name
                  &&
                  product.size === action.size);

                return {
                  ...state,
                  cart: state.cart.filter((product, i) =>i !== removeIndex),
                  cartTotalItems: state.cartTotalItems - state.cart[removeIndex].count_item,
                  cartTotalPrice: state.cartTotalPrice - state.cart[removeIndex].total_price,
                }

    default:
      return state;
  }
}

export default reducer;
