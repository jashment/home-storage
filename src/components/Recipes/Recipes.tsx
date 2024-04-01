import tw from "tailwind-styled-components"
import logo from '../../assets/react.svg'
import Recipe from "../Recipe"
const Recipes = () => {
  const recipes = [
    {
      id: 1,
      image: logo,
      name: 'Recipe 1 longer string'
    },
    {
      id: 2,
      image: logo,
      name: 'Recipe 2'
    },
    {
      id: 3,
      image: logo,
      name: 'Recipe 3'
    },
    {
      id: 1,
      image: logo,
      name: 'Recipe 1 longer string'
    },
    {
      id: 2,
      image: logo,
      name: 'Recipe 2'
    },
    {
      id: 3,
      image: logo,
      name: 'Recipe 3'
    },
    {
      id: 1,
      image: logo,
      name: 'Recipe 1 longer string'
    },
    {
      id: 2,
      image: logo,
      name: 'Recipe 2'
    },
    {
      id: 3,
      image: logo,
      name: 'Recipe 3'
    },
    {
      id: 1,
      image: logo,
      name: 'Recipe 1 longer string'
    },
    {
      id: 2,
      image: logo,
      name: 'Recipe 2'
    },
    {
      id: 3,
      image: logo,
      name: 'Recipe 3'
    },
  ]
  return <TWRecipesContainer>
    {recipes.map((recipe) => {
      return <Recipe key={recipe.id} name={recipe.name} id={recipe.id} image={recipe.image} />
    })}
  </TWRecipesContainer>
}

const TWRecipesContainer = tw.div`
  flex
  flex-col
  md:flex-row
  flex-wrap
  items-center
  justify-center
  h-full
  p-5
`;


export default Recipes