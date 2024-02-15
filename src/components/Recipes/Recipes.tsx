import tw from "tailwind-styled-components"

const Recipes = () => {
  const allRecipes = [
    "Recipe 1",
    "Recipe 2",
    "Recipe 3",
    "Recipe 4",
    "Recipe 5",
    "Recipe 6",
    "Recipe 7",
    "Recipe 8",
    "Recipe 9",
    "Recipe 10",
  ]
  return (
    <TWRecipesContainer>
      {allRecipes.map(
        (recipe) => <Box>{recipe}</Box>
      )}
      <TWButtonSpan>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
        <p>Add New</p>
      </TWButtonSpan>
    </TWRecipesContainer>
  )
}

const TWRecipesContainer = tw.div`
  flex
  flex-col
  md:flex-row
  flex-wrap
  mx-10
  mb-24
`;

const Box = tw.div`
    bg-blue-500 
    hover:bg-blue-700 
    text-white 
    font-bold 
    border-b-4 
    border-blue-800 
    rounded-md 
    shadow-md 
    transition-transform 
    transform 
    hover:scale-105
    hover:shadow-lg
    p-5
    m-3
`;

const TWButtonSpan = tw.span`
    flex
    flex-col
    items-center
    justify-center
    my-auto
    mx-6
    my-3
    md:my-5
    h-full
`;

export default Recipes