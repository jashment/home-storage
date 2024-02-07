import tw from 'tailwind-styled-components';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <TWHomeContainer>
      <Link to="/storage">
        <Box>View Storage</Box>
      </Link>
      <Link to="/shopping">
        <Box>View Shopping List</Box>
      </Link>
      <Link to="/recipe">
        <Box>View/Add Recipes</Box>
      </Link>
    </TWHomeContainer>
  );
};

const TWHomeContainer = tw.div`
  flex
  mx-auto
  flex-col
  md:flex-row
`;

const Box = tw.div`
  border-solid
  border-2
  border-main
  drop-shadow-md
  rounded-md
  bg-white
  p-5
  m-3
  md:hover:drop-shadow-lg
`;

export default Home;
