import tw from "tailwind-styled-components"

type RecipeProps = {
  name: string
  id: number
  image: string
}
const Recipe = ({ name, id, image }: RecipeProps) => {
  return (
    <TWRecipeItem key={id}>
      <h2>{name}</h2>
      <img src={image} alt={name} />
    </TWRecipeItem>
  )
}

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

export default Recipe