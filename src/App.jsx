
import './App.css'
import Courses from './Componentes/Courses/Courses'
import Header from './Componentes/Header/Header'

function App() {
  

  return (
    <>
    <Header></Header>
    <div className='mx-2 md:mx-3 my-8 lg:mx-6 flex flex-col md:flex-row gap-8 '>
      <Courses></Courses>
    </div>
      
    </>
  )
}

export default App
