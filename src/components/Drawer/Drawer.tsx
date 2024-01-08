import tw from "tailwind-styled-components"

const Drawer = () => {
    return (
        <TWDrawer>
            <TWDrawerButton>Button</TWDrawerButton>
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
    md:items-start
`

const TWDrawerButton = tw.button`
    border-solid
    border-2
    drop-shadow-md
    fixed
    justify-center
    invisible
    md:visible
`

export default Drawer