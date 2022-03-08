import React, { useEffect, useContext, useState } from "react";
import { GlobalContext } from "../../contexts/GlobalStateContext";
import {DivReload, DivMain, DivHeader, DivBooks, DivLogo, DivLogin, DivFooter, Img } from "./styled";
import Typography from '@mui/material/Typography';
import logo from "../../assets/NOZ_black.png"
import LogoutIcon from '@mui/icons-material/Logout';
import Fab from '@mui/material/Fab';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import CardBook from "./cardBook";
import useProtectedPage from "../../hooks/useProtectedPage";
import { useNavigate } from "react-router-dom";
import { getBooks, getBooksDetail } from "../../services/user";
import ModalDiv from "./modal";
import { goToLoginPage } from "../../routes/coordinator";
import CircularProgress from '@mui/material/CircularProgress';

export default function HomePage() {
 useProtectedPage()

 const { states, setters, clears } = useContext(GlobalContext)
 const history = useNavigate()

 function handleOpen(id) {
  getBooksDetail(setters.setBookDetail, id)
  setters.setOpen(true)
 }
 const handleClose = () => {
  setters.setBookDetail()
  setters.setOpen(false)
 }

 const booksCards = states.books.map((book) => {
  return (
   <CardBook
    openModal={() => handleOpen(book.id)}
    key={book.id}
    book={book}
   />
  )
 })

 useEffect(() => {
  getBooks(setters.setBooks, setters.setIsLoading, states.page)
 }, [])

 const addPage = () => {
  let newPage = states.page + 1
  setters.setPage(newPage)
  getBooks(setters.setBooks, setters.setIsLoading, states.page)
 }

 const reducePage = () => {
  if (states.page !== 1) {
   let newPage = states.page - 1
   setters.setPage(newPage)
   getBooks(setters.setBooks, setters.setIsLoading, states.page)
  }
 }

 function buttonLogout() {
  localStorage.removeItem('token')
  goToLoginPage(history)
 }

 return (
  <DivMain>
   {states.bookDetail && (<ModalDiv
    book={states.bookDetail}
    openModal={states.open}
    handleClose={handleClose}
   />)}
   <DivHeader>
    <DivLogo>
     <Img src={logo}></Img>
     <Typography
      variant="h6"
      color='terceary'
     >Books</Typography>
    </DivLogo>
    <DivLogin>
     <Typography
      sx={{ mr: '10px' }}
     >Bem vindo, {localStorage.getItem('name')}!</Typography>
     <Fab
      onClick={buttonLogout}
      color="primary"
      size="small"
     >
      <LogoutIcon />
     </Fab>
    </DivLogin>
   </DivHeader>
   <DivBooks>
    {states.isLoading ?
     <DivReload>
      <CircularProgress sx={{alignContent: 'center'}} color="secondary" />
     </DivReload> : booksCards}
   </DivBooks>
   <DivFooter>
    <Typography
     sx={{ mr: '10px' }}
    >Página {states.page} de 100</Typography>
    <IconButton
     onClick={reducePage}
     color="terceary"
     size="small"
    >
     <ArrowBackIosNewIcon
      fontSize="inherit"
     />
    </IconButton>
    <IconButton
     onClick={addPage}
     color="terceary"
     size="small"
    >
     <ArrowForwardIosIcon
      fontSize="inherit"
     />
    </IconButton>
   </DivFooter>
  </DivMain>
 )
}