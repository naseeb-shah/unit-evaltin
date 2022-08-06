
import Cart from "../features/cart";
import { configureStore } from "@reduxjs/toolkit";
import Auth from "../features/auth/auth";
export default configureStore({
    reducer:{
Cart:Cart,
Auth:Auth
    }
})