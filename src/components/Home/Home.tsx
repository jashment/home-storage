import tw from 'tailwind-styled-components'
import Categories from '../Categories'

const Home = () => {

  return (
    <TWAllContainer>
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