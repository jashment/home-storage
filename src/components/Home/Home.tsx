import tw from 'tailwind-styled-components'

const Home = () => {
  return (
    <Container>
      <Heading>Home Storage</Heading>
      <p className='mx-auto'>What would you like to do?</p>
      <Categories>
        <Box>Food</Box>
        <Box>Bath</Box>
        <Box>Add</Box>
      </Categories>
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

const Categories = tw.div`
  border-black
  mx-auto
  flex
  flex-col
  md:flex-row
  flex-wrap
  justify-around
`

const Box = tw.div`
  border-solid
  border-2
  border-black
  h-20
  w-20
  m-3
`

export default Home