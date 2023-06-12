import { ReactElement, createContext, useReducer } from "react";

export type CardItemType = {
  sku: string;
  name: string;
  price: number;
  qty: number;
  
};

type CartStateType = { cart: CardItemType[] };

const initCartState: CartStateType = { cart: [] };

export type ReducerActionType = {
  type: string;
  payload?: CardItemType;
};

const reducer = (
  state: CartStateType,
  action: ReducerActionType
): CartStateType => {
  switch (action.type) {
    case "ADD": {
      if (!action.payload) {
        throw new Error("action.payload missing in ADD action");
      }

      const { sku, name, price } = action.payload;
      const filteredCart: CardItemType[] = state.cart.filter(
        (item) => item.sku !== sku
      );

      const itemExists: CardItemType | undefined = state.cart.find(
        (item) => item.sku === sku
      );

      const qty: number = itemExists ? itemExists.qty + 1 : 1;

      return { ...state, cart: [...filteredCart, { sku, name, price, qty}] };
    }

    case "REMOVE": {
      if (!action.payload) {
        throw new Error("action.payload missing in REMOVE action");
      }

      const { sku } = action.payload;
      const filteredCart: CardItemType[] = state.cart.filter(
        (item) => item.sku !== sku
      );

      return { ...state, cart: [...filteredCart] };
    }
    case "QTY": {
      if (!action.payload) {
        throw new Error("action.payload missing in QTY action");
      }

      const { sku, qty } = action.payload;

      const itemExists: CardItemType | undefined = state.cart.find(
        (item) => item.sku === sku
      );

      if (!itemExists) {
        throw new Error("Item must exist in order to update quantity");
      }

      const updatedCart: CardItemType = {
        ...itemExists,
        qty,
      };

      const filteredCart: CardItemType[] = state.cart.filter(
        (item) => item.sku !== sku
      );

      return { ...state, cart: [...filteredCart, updatedCart] };
    }
    case "SUBMIT":
      return { ...state, cart: [] };

    default:
      throw new Error("Unidentified reducer action type");
  }
};

const useCartContext = (initCartState: CartStateType) => {
  const [state, dispatch] = useReducer(reducer, initCartState);

  const totalItems = state.cart.reduce((prevValue, currCartItem) => {
    return prevValue + currCartItem.qty;
  }, 0);

  const totalPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(
    state.cart.reduce((previousValue, cartItem) => {
      return previousValue + cartItem.qty * cartItem.price;
    }, 0)
  );

  const cart = state.cart.sort((a, b) => {
    const itemA = Number(a.sku.slice(-4));
    const itemB = Number(b.sku.slice(-4));

    return itemA - itemB;
  });

  return { dispatch, totalItems, totalPrice, cart };
};

export type UseCartContextType = ReturnType<typeof useCartContext>;

const initCartContextState: UseCartContextType = {
  dispatch: () => {
    ('');
  },
  totalItems: 0,
  totalPrice: "",
  cart: [],
};

const CartContext =
  createContext<UseCartContextType>(initCartContextState);

type ChildrenType = { children?: ReactElement | ReactElement[] };

export const CartContextProvider = ({
  children,
}: ChildrenType): ReactElement => {
  return (
    <CartContext.Provider value={useCartContext(initCartState)}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext