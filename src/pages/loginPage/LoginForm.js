import React, { useContext } from "react";
import { Box } from "@mui/material";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import { GlobalContext } from "../../contexts/GlobalStateContext";
import OutlinedInput from '@mui/material/OutlinedInput';
import { useNavigate } from 'react-router-dom';
import { login } from "../../services/user";
import { CustomButtonRoot } from "./styled";
import ButtonUnstyled from '@mui/base/ButtonUnstyled';



const LoginForm = () => {
 const { states, setters, clears } = useContext(GlobalContext)
 const history = useNavigate()

 function CustomButton(props) {
  return <ButtonUnstyled {...props} component={CustomButtonRoot} />;
 }
 function onSubmitForm(event) {
  event.preventDefault()
  login(states.formProfile, history, setters.setIsLoading, setters.setUser)
 }

 return (

  <Box
   onSubmit={onSubmitForm}
   autoComplete='off'
   component='form'
   sx={{
    display: 'flex',
    flexDirection: 'column',
    width: '20%',
    gap: '16px',
    pb: '28px',
    pl: '13%'
   }}
  >
   <FormControl variant="filled">
    <InputLabel htmlFor="filled-adornment-password">Email</InputLabel>
    <OutlinedInput
     name={"email"}
     type='typograph'
     value={states.formProfile.email}
     onChange={setters.onChangeProfile}
    />
   </FormControl>

   <FormControl variant="filled">
    <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
    <OutlinedInput
     name="password"
     type='password'
     value={states.formProfile.password}
     onChange={setters.onChangeProfile}
     endAdornment={
      <InputAdornment position="end">
       <CustomButton
        type='submit'
       >Entrar</CustomButton>
      </InputAdornment>
     }
    />
   </FormControl>
  </Box >

 );
};

export default LoginForm;