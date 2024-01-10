import { useState } from 'react'
import tw from 'tailwind-styled-components'
import Categories from '../Categories'
import Drawer from '../Drawer'

const Home = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(true)

  return (
    <TWAllContainer>
      <TWDrawerButton onClick={() => setDrawerIsOpen(!drawerIsOpen)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </TWDrawerButton>
      <TWDrawerContainer>
        <Drawer drawerIsOpen={drawerIsOpen} setDrawerIsOpen={setDrawerIsOpen} />
      </TWDrawerContainer>
      <TWHomeContainer>

        <Heading>Home Storage</Heading>
        <p className='mx-auto'>What would you like to do?</p>

        <Categories />
      </TWHomeContainer>
    </TWAllContainer>
  )
}

const TWAllContainer = tw.div`
  flex
  flex-row
  h-screen
  w-full
`

const TWDrawerContainer = tw.div`
  md:basis-1/6
  flex-col
`

const TWHomeContainer = tw.div`
  flex
  mx-auto
  flex-col
`

const Heading = tw.h1`
  mx-auto
  font-bold
`

const TWDrawerButton = tw.button`
  absolute
  mt-5
  ml-5
  invisible
  md:visible
`

export default Home