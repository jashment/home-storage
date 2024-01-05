import tw from "tailwind-styled-components"
import Category from "../Category"

const Categories = () => {
    const categoryNames = [
        'Food',
        'Bathroom',
        'First Aid'
    ]
    return (
        <AllCategories>
            {categoryNames.map((name) => {
                return <Category categoryName={name} />
            })}
        </AllCategories>
    )
}

const AllCategories = tw.div`
  border-black
  mx-auto
  flex
  flex-col
  md:flex-row
  flex-wrap
  justify-around
`

export default Categories