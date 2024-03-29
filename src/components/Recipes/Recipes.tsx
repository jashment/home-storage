import tw from "tailwind-styled-components"
import logo from '../../assets/react.svg'
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
      return <TWRecipeItem key={recipe.id}>
        <h2>{recipe.name}</h2>
        <img src={recipe.image} alt={recipe.name} />
      </TWRecipeItem>
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

const TWRecipeItem = tw.div`
  flex
  flex-col
  items-center
  justify-center
  m-5
  bg-white
  border-solid
  border-2
  border-main
  drop-shadow-md
  rounded-md
  p-5
  md:hover:drop-shadow-lg
  
`

export default Recipes