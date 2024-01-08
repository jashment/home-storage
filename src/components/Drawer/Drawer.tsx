import tw from "tailwind-styled-components"

const Drawer = () => {
    return (
        <TWDrawer>
            <TWDrawerButton>Button</TWDrawerButton>
            <TWItem />
            <TWItem />
            <TWItem />
            <TWItem />
        </TWDrawer>
    )
}

const TWDrawer = tw.div`
    flex
    border-solid
    border-black
    border-t-2
    md:border-t-0
    bottom-0
    w-full
    fixed
    h-20
    items-center
    justify-between
    md:border-r-2
    md:h-full
    md:w-20
    md:flex-col
    md:items-center
`

const TWDrawerButton = tw.button`
    border-solid
    border
    drop-shadow-md
    fixed
    justify-center
    invisible
    md:visible
`

const TWItem = tw.div`
    border-solid
    border-black
    border
    w-10
    h-10
    m-10
`

export default Drawer