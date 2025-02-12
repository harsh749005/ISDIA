import { useState } from 'react'
import Navbar from './components/Navbar'
import Hamburger from './components/Hamburger/Hamburger'



function App() {
   const [check,setCheck] = useState(false);
   const toggleCheck = () => {
     setCheck(!check);
   };

  return (
    <>
     <Navbar toggleCheck={toggleCheck} check={check}/>
     <Hamburger check={check}/>
    </>
  )
}

export default App
