import styled from "styled-components";

export const DivMain = styled.div`
display: flex ;
flex-direction: column;
justify-content: space-around;
background:#E0E6EE;
height:100vh;
@media only screen and (max-width: 1000px) {
 height:100%;
 width:100%;
}
`

export const DivHeader = styled.div`
height: 10vh;
width:90%;
display:flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin:auto;
`

export const DivLogo = styled.div`
display:flex;
flex-direction: row;
align-items: center;
`

export const DivLogin = styled.div`
display:flex;
flex-direction: row;
align-items: center;
`

export const DivFooter = styled.div`
height: 5vh;
width:95%;
display:flex;
flex-direction: row;
justify-content: flex-end;
`

export const Img = styled.img`
margin-bottom:1%;
margin-right:10%;
`
export const DivBooks = styled.div`
height: 87vh ;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
flex-direction: row;
flex-wrap: wrap;
padding: 0 2% 0 2%;
@media only screen and (max-width: 1000px) {
 height: 100%;
 grid-template-columns: 1fr 1fr 1fr;
 justify-items: center;
}
@media only screen and (max-width: 796px) {
 height: 100%;
 grid-template-columns: 1fr;
 justify-items: center;
}
`

export const DivModal = styled.div`
display: flex ;
justify-content: space-around;

`
export const DivDescription = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
`

export const DivTitle = styled.div`

`
export const DivInfo = styled.div`
display: flex ;
justify-content: space-between;
`
export const DivLeft = styled.div`

`
export const DivRigth = styled.div`

`
export const Divdesc = styled.div`

`
export const DivReload = styled.div`
width:90vw;
display:flex;
justify-content:center;
`