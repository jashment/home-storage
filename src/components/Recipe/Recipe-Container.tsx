import Recipe from "./Recipe"

type RecipeContainerProps = {
  name: string
  id: number
  image: string
}
const RecipeContainer = ({ name, id, image }: RecipeContainerProps) => {
  return <Recipe name={name} id={id} image={image} />
};

export default RecipeContainer