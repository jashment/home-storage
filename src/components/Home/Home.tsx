import tw from 'tailwind-styled-components'
import Categories from '../Categories'

const Home = () => {
  return (
    <Container>
      <Heading>Home Storage</Heading>
      <p className='mx-auto'>What would you like to do?</p>
      <Categories />
    </Container>
  )
}

const Container = tw.div`
  flex
  container
  mx-auto
  flex-col
`

const Heading = tw.h1`
  mx-auto
  font-bold
`


export default Home