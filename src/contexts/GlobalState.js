import React, { useState } from "react";
import { GlobalContext } from "./GlobalStateContext";
import useForm from "../hooks/useForm"


const GlobalState = (props) => {
 const [formProfile, onChangeProfile, clearProfile] = useForm({ email: "", password: "" })
 const [user, setUser] = useState();
 const [isLoading, setIsLoading] = useState(true);
 const [books, setBooks] = useState([])
 const [bookDetail, setBookDetail] = useState()
 const [page, setPage] = useState(1)
 const [open, setOpen] = useState(false);

 const states = {
  formProfile,
  isLoading,
  books,
  page,
  user,
  open,
  bookDetail
 }
 const setters = {
  onChangeProfile,
  setIsLoading,
  setBooks,
  setPage,
  setUser,
  setOpen,
  setBookDetail
 }
 const clears = { clearProfile }

 return (
  <GlobalContext.Provider value={{ states, setters, clears }}>
   {props.children}
  </GlobalContext.Provider>
 );
};

export default GlobalState;