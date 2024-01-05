import tw from "tailwind-styled-components"

interface CategoryTypes {
    categoryName: string
}

const Category = ({ categoryName }: CategoryTypes) => {
    return (
        <Box>
            <TWCategoryName>
                {categoryName}
            </TWCategoryName>
        </Box>
    )
}

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

const TWCategoryName = tw.p`
    flex
    items-center
    justify-center
    my-auto
    h-full
`

export default Category