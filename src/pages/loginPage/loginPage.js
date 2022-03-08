import React from "react";
import { DivMain, DivInput, Img } from "./styled";
import img from "../../assets/NOZ_white.png"
import LoginForm from "./LoginForm";
import Typography from '@mui/material/Typography';
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

export default function LoginPage() {
 useUnprotectedPage()

 return (
  <DivMain>
   <DivInput>
    <Img src={img}></Img>
    <Typography 
    variant="body1"
    color='secondary'
    >Books</Typography>
   </DivInput>
   <LoginForm/>
  </DivMain>
 )
}