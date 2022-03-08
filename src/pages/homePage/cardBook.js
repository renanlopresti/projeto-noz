import React from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


export default function CardBook(props) {
 return (
  <Card
   variant="outlined"
   sx={{
    width: '95%',
    height: '27vh'
   }}
  >
   <CardActionArea
    onClick={props.openModal}
   >
    <CardContent
     sx={{
      width: '50vh',
      display: 'flex',
      p: '2%'
     }}
    >
     <CardMedia
      sx={{
       width: '34%',
       pr: '2%'
      }}
      component="img"
      src={props.book.imageUrl}
     />
     <Box
      sx={{
       display: 'flex',
       flexDirection: 'column',
       justifyContent: 'space-between'
      }}
     >
      <Box
       sx={{
        display: 'flex',
        flexDirection: 'column'
       }}
      >
       <Typography >
        <Box
         sx={{ fontWeight: 'bold' }}
         gutterBottom="true"
         variant="caption"
        >
         {props.book.title}
        </Box>
       </Typography>
       {props.book.authors.map((aut) => {
        return (
         <Typography
          key={aut}
          color="secondary"
          variant="caption">
          {aut}
         </Typography>
        )
       })}
      </Box>
      <Box
       sx={{
        display: 'flex',
        flexDirection: 'column'
       }}
      >
       <Typography
        variant="caption"
       >{props.book.pageCount} páginas</Typography>
       <Typography
        variant="caption"
       >Editora {props.book.publisher}</Typography>
       <Typography
        variant="caption"
       >Publicado em {props.book.published}</Typography>
      </Box>
     </Box>
    </CardContent>
   </CardActionArea>
  </Card >
 )
}