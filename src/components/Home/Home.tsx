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

const TWHomeContainer = tw.div`
  flex
  mx-auto
  flex-col
`

const Heading = tw.h1`
  mx-auto
  font-bold
`

export default Home