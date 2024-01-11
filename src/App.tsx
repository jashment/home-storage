import Home from './components/Home'
import { Route, Routes } from 'react-router-dom';
import ShoppingList from './components/ShoppingList';
import tw from 'tailwind-styled-components';
import Drawer from './components/Drawer';
import { useState } from 'react';

function App() {
  const [drawerIsOpen, setDrawerIsOpen] = useState(true)
  return (
    <>
    <TWDrawerButton onClick={() => setDrawerIsOpen(!drawerIsOpen)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </TWDrawerButton>
      <TWDrawerContainer>
        <Drawer drawerIsOpen={drawerIsOpen} setDrawerIsOpen={setDrawerIsOpen} />
      </TWDrawerContainer>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shopping' element={<ShoppingList />} />
      </Routes>
    </>
  )
}

const TWDrawerButton = tw.button`
  absolute
  mt-5
  ml-5
  invisible
  md:visible
`

const TWDrawerContainer = tw.div`
  md:basis-1/6
  flex-col
`

export default App
