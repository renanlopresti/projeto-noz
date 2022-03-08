import axios from 'axios';
import { BASE_URL } from '../constants/url';
import { goToHomePage, goToLoginPage } from '../routes/coordinator';

export const login = (body, history, setIsLoading, setUser) => {
 setIsLoading(true)
 axios.post(`${BASE_URL}/auth/sign-in`, body)
  .then((res) => {
   localStorage.setItem("token", res.headers.authorization)
   setUser(res.data)
   localStorage.setItem("name", res.data.name.split(' ')[0])
   setIsLoading(false)
   goToHomePage(history)
  })
  .catch((err) => {
   console.log(err.response)
   alert(err.response.data.errors.message)
   setIsLoading(false)
  })
}

export const getBooks = (setBooks, setIsLoading, page) => {
 setIsLoading(true)
 axios.get(`${BASE_URL}/books?page=${page}&amount=12`,
  {
   headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`
   }
  })
  .then((res) => {
   setBooks(res.data.data)
   setIsLoading(false)
  })
  .catch((err) => {
   console.log(err)
   setIsLoading(false)
  })
}

export async function getBooksDetail(setBookDetail, id) {
 try {
  axios.get(`${BASE_URL}/books/${id}`,
   {
    headers: {
     Authorization: `Bearer ${localStorage.getItem("token")}`
    }
   })
   .then((res) => {
    setBookDetail(res.data)
   })
 } catch (err) {
  console.log(err)
 }
}

