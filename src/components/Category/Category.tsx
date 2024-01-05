import tw from "tailwind-styled-components"

interface CategoryTypes {
    categoryName: string
}

const Category = ({ categoryName }: CategoryTypes) => {
    return (
        <Box>{categoryName}</Box>
    )
}

const Box = tw.div`
  border-solid
  border-2
  border-black
  h-20
  w-20
  m-3
`

export default Category