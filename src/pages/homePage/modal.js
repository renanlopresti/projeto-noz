import React from "react";
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {Divdesc, DivModal, DivDescription, DivTitle, DivInfo, DivLeft, DivRigth } from "./styled";

const style = {
 position: 'absolute',
 top: '50%',
 left: '50%',
 transform: 'translate(-50%, -50%)',
 width: '55%',
 bgcolor: 'background.paper',
 border: '2px solid #000',
 boxShadow: 24,
 p: 4,
};

export default function ModalDiv(props) {
 return (
  <Modal
   open={props.openModal}
   onClose={props.handleClose}
  >
   <Box sx={style}>
    <DivModal>
     <CardMedia
      sx={{
       width: '50%',
       mr:'5%'
      }}
      component='img'
      src={props.book.imageUrl}
     />
     <DivDescription>
      <DivTitle>
       <Typography
        variant="h4"
       >{props.book.title}
       </Typography>
       {
        props.book.authors.map((aut) => {
         return (
          <Typography
           key={aut}
           color="secondary"
           variant="body1">
           {aut}
          </Typography>
         )
        })
       }
      </DivTitle>
      <Typography
      >Informações</Typography>
      <DivInfo>
       <DivLeft>
        <Typography
        >Páginas</Typography>
        <Typography
        >Editora</Typography>
        <Typography
        >Publicação</Typography>
        <Typography
        >Idioma</Typography>
        <Typography
        >ISBN-10</Typography>
        <Typography
        >ISBN-13</Typography>
       </DivLeft>
       <DivRigth>
        <Typography
        >{props.book.pageCount}</Typography>
        <Typography
        >{props.book.publisher}</Typography>
        <Typography
        >{props.book.published}</Typography>
        <Typography
        >{props.book.language}</Typography>
        <Typography
        >{props.book.isbn10}</Typography>
        <Typography
        >{props.book.isbn13}</Typography>
       </DivRigth>
      </DivInfo>
      <Divdesc>
      <Typography>
       Resenha da Editora
      </Typography>
      <Typography>
       {props.book.description}
      </Typography>
      </Divdesc>
     </DivDescription>
    </DivModal>
   </Box>
  </Modal>
 )
}