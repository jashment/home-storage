import tw from 'tailwind-styled-components'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <TWAllContainer>
      <TWHomeContainer>
        <p className='mx-auto'>What would you like to do?</p>
        <Link to="/storage">
          <Box>
            Storage
          </Box>
        </Link>
        <Link to="/shopping">
          <Box>
            Shopping List
          </Box>
        </Link>
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

const Box = tw.div`
    border-solid
    border-2
    border-cyan-200
    drop-shadow-md
    rounded-md
    bg-white
    p-10
    m-3
`


export default Home