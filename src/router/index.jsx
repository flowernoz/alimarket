import EmptyCart from "../components/emptyCart";
import Main from "../components/Main/Main";
import Cart from "../pages/cart";
import Checkout from "../pages/checkout";

export const router = [
    {
        path: "/",
        element:<Main/>
    },
    {
        path: "/checkout",
        element:<Checkout/>
    },
    {
        path: "/cart",
        element:<Cart/>
    },
    {
        path: "/emptycart",
        element:<EmptyCart/>
    }
]