
import './App.css'
import Bookmarks from './Componentes/Bookmarks/Bookmarks'
import Courses from './Componentes/Courses/Courses'
import Header from './Componentes/Header/Header'

function App() {
  

  return (
    <>
    <Header></Header>
    <div className='mx-3 flex flex-col lg:flex-row gap-8'>
      <Courses></Courses>
      <Bookmarks></Bookmarks>
    </div>
      
    </>
  )
}

export default App
