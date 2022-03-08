import styled from 'styled-components'
import img from '../../assets/Background-Image.png'
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';

export const DivMain = styled.div`
 background-image: url(${img});
 background-repeat:no-repeat;
 background-size: cover;
 position: center;
 height: 100vh;
`
export const DivInput = styled.div`
display:flex;
flex-direction: row;
margin:auto;
padding-top:15%;
padding-left:15%;
`
export const Img = styled.img`
margin-bottom:1%;
margin-right:1%;
`

export const CustomButtonRoot = styled('button')`
  background-color: #FEFEFE;
  padding: 15px 20px;
  border-radius: 30px;
  color: #B22E6F;
  font-weight: 600;
  font-family:  Arial;
  font-size: 12px;
  transition: all 200ms ease;
  cursor: pointer;
  box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 0 rgba(0, 127, 255, 0);
  border: none;

  &:hover {
    background-color: #909090;
  }

  &.${buttonUnstyledClasses.active} {
    background-color: #004386;
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

`;