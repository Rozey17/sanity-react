import Cookies from "js-cookie";
import { createContext, useReducer } from "react";

//@ts-ignore
export const Store = createContext();
const initialState = {
  cart: {
    cartItems: Cookies.get("cartItems")
      ? //@ts-ignore
        JSON.parse(Cookies.get("cartItems"))
      : [],
  },
};

function reducer(
  state: { cart: { cartItems: any[] } },
  action: { type: any; payload: { id: any } }
) {
  switch (action.type) {
    case "CART_ADD_ITEM": {
      const newItem = action.payload;
      const existItem = state.cart.cartItems.find(
        (item: { id: any }) => item.id === newItem.id
      );

      const cartItems = existItem
        ? state.cart.cartItems.map((item: { id: any }) =>
            item.id === existItem.id
              ? { ...existItem, quantity: existItem.quantity + 1 }
              : item
          )
        : [...state.cart.cartItems, { ...newItem, quantity: 1 }];
      Cookies.set("cartItems", JSON.stringify(cartItems));
      return { ...state, cart: { ...state.cart, cartItems } };
    }

    case "CART_REMOVE_ITEM": {
      const newItem = action.payload;
      const existItem = state.cart.cartItems.find(
        (item: { id: any }) => item.id === newItem.id
      );

      const cartItems =
        existItem.quantity === 1
          ? state.cart.cartItems.filter(
              (item: { id: any }) => item.id !== action.payload.id
            )
          : state.cart.cartItems.map((item: { id: any }) =>
              item.id === newItem.id
                ? { ...existItem, quantity: existItem.quantity - 1 }
                : item
            );

      Cookies.set("cartItems", JSON.stringify(cartItems));
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    case "CART_CLEAR":
      return { ...state, cart: { ...state.cart, cartItems: [] } };
    default:
      return state;
  }
}

export function StoreProvider(props: any) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  //   return (<Store.Provider value={value}>{props.children}</Store.Provider>)
  return null;
}

// type ActionType =
//   | { type: "ADD"; text: string }
//   | { type: "REMOVE"; id: number };

// const [state, dispatch] = useReducer((state: Todo[], action: ActionType) => {
//   switch (action.type) {
//     case "ADD":
//       return [...state, { id: state.length, text: action.text, done: false }];
//     case "REMOVE":
//       return state.filter(({ id }) => id === action.id);
//     default:
//       throw new Error();
//   }
// }, []);
