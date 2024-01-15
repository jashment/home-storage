import Home from './components/Home'
import { Route, Routes, useLocation } from 'react-router-dom';
import ShoppingList from './components/ShoppingList';
import tw from 'tailwind-styled-components';
import Drawer from './components/Drawer';
import { useEffect, useState } from 'react';
import Storage from './components/Storage';

function App() {
  const location = useLocation();
  const [drawerIsOpen, setDrawerIsOpen] = useState(true)

  
  const [headerText, setHeaderText] = useState('');

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setHeaderText('Home Storage');
        break;
      case '/shopping':
        setHeaderText('Shopping List');
        break;
      case '/storage':
        setHeaderText('Storage');
        break;
      default:
        setHeaderText('Default Header');
    }
  }, [location.pathname]);

  return (
    <TWAppContainer>
      <TWHeader>
        <TWDrawerButton onClick={() => setDrawerIsOpen(!drawerIsOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </TWDrawerButton>
        <TWHeaderText>
          {headerText}
        </TWHeaderText>
      </TWHeader>
    
    
      <TWDrawerContainer>
        <Drawer drawerIsOpen={drawerIsOpen} setDrawerIsOpen={setDrawerIsOpen} />
      </TWDrawerContainer>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shopping' element={<ShoppingList />} />
        <Route path='/storage' element={<Storage />} />
      </Routes>
    </TWAppContainer>
  )
}

const TWAppContainer = tw.div`
  flex
  flex-col
`

const TWHeader = tw.div`
  flex
  border-b
  border-black
  py-5
`

const TWHeaderText = tw.h1`
  font-bold
  basis-11/12
  text-center
`

const TWDrawerButton = tw.button`
  invisible
  md:visible
  basis-1/12
`

const TWDrawerContainer = tw.div`
  md:basis-1/6
  flex-col
`

export default App
