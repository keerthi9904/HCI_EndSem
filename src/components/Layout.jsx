import Header from "./Header";
import Cart from "./Cart";
import Checkout from "./Checkout";
import { Outlet } from "react-router-dom";
import { UserProgressContextProvider } from "../store/UserProgressContext";
import { useState } from "react";

export default function Layout() {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <UserProgressContextProvider>
      <Header onSearch={setSearchQuery} />
      <Cart />
      <Checkout />
      <Outlet context={{ searchQuery }}/> {/* This will render either Mainpage or CategoryMeals */}
    </UserProgressContextProvider>
  );
}
