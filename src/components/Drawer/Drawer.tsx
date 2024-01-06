import tw from "tailwind-styled-components"

const Drawer = () => {
    return (
        <TWDrawer>
            <TWDrawerButton>Button</TWDrawerButton>
        </TWDrawer>
    )
}

const TWDrawer = tw.div`
    border-solid
    border-2
    h-full
    fixed
    w-20
`

const TWDrawerButton = tw.button`
    border-solid
    border-2
    drop-shadow-md
`

export default Drawer