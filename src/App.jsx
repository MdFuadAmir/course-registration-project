
import { useState } from 'react'
import './App.css'
import Bookmarks from './Componentes/Bookmarks/Bookmarks'
import Courses from './Componentes/Courses/Courses'
import Header from './Componentes/Header/Header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const handleMarkAsRead = (title) =>{
      const newBookmarks = [...bookmarks, title];
      setBookmarks(newBookmarks);
  }
  const [totalPrice, setTotalPrice] = useState(0);
  const handleTotalPrice = price =>{
    const newTotalPrice = (totalPrice + price);
    setTotalPrice(newTotalPrice);
  }
  const [totalCradit, setTotalCradit] = useState(0);
  const handleTotalCradit = cradit =>{
    const newTotalCradit = (totalCradit + cradit);
    if(20 < newTotalCradit){
      toast('sorry your cradit greater then 20 !!!');
    }
    else{
      setTotalCradit(newTotalCradit);
    }
  }
  const [totalRemainingHr, setTotalRemainingHr] = useState(20);
  const handleTotalRemainingHr = cradit =>{
    const newTotalRemainingHr = (totalRemainingHr - cradit);
    if(0 > newTotalRemainingHr){
      toast('Sorry your remaining time less then 0 !!!')

    }
    else{
      setTotalRemainingHr(newTotalRemainingHr);
    }
  }
  

  
  return (
    <>
    <Header></Header>
    <div className='mx-3 flex flex-col lg:flex-row gap-8'>
      <Courses 
      handleMarkAsRead={handleMarkAsRead}
      handleTotalPrice={handleTotalPrice}
      handleTotalCradit={handleTotalCradit}
      handleTotalRemainingHr={handleTotalRemainingHr}
      ></Courses>
      <Bookmarks 
      bookmarks={bookmarks}
      totalPrice={totalPrice}
      totalCradit={totalCradit}
      totalRemainingHr={totalRemainingHr}
      ></Bookmarks>
      <ToastContainer></ToastContainer>
    </div>
      
    </>
  )
}

export default App
