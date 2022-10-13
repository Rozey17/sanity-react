/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/dist/client/router";
import { useCallback, useContext } from "react";

export const Cart = () => {
  const router = useRouter();
  const id = router.query.id;
  //@ts-ignore
  const { state, dispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  const updateCartHandler = async (item: any, quantity: any) => {
    dispatch({ type: "CART_ADD_ITEM", payload: { ...item, quantity } });
  };
  const removeItemHandler = (item: any) => {
    dispatch({ type: "CART_REMOVE_ITEM", payload: item });
  };

  //   const itemsPrice = cartItems.reduce(
  //     (a: number, c) => a + c.quantity! * c.price!,
  //     0
  //   );
  //   const taxPrice = itemsPrice < 14 ? 2 : 0;

  //   const totalPrice = itemsPrice + taxPrice;

  //   const leftToTwenty = 14 - itemsPrice;
  //   const percentage = (100 * itemsPrice) / 14;
  return (
    <div className="w-80 bg-white shadow-xl laptop:absolute laptop:right-52  text-center rounded-sm hidden laptop:block">
      <div className="flex justify-center items-center text-red-600 mt-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-5 transform rotate-90 text-red-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
          />
        </svg>
      </div>

      <div className="text-gray-500">
        {cartItems.length === 0 && (
          <div className="mb-12">Votre panier est vide</div>
        )}
        {cartItems
          .filer((item) => item.restaurant?.id === id)
          .map((item) => (
            <div
              key={item.id}
              className="flex mx-5 justify-between text-center"
            >
              <div className="">
                <span className="flex items-end">
                  <button onClick={() => removeItemHandler(item)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5  text-teal-500 "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                  <label className=" laptop:mx-2">{item.quantity}</label>
                  <button onClick={() => updateCartHandler(item, 1)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5  text-teal-500  "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </span>
              </div>
              <div className="w-2/5">{item.name}</div>
            </div>
          ))}
      </div>
    </div>
  );
};
