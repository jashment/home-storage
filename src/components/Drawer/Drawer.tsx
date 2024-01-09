import { Dispatch, SetStateAction } from "react"
import tw from "tailwind-styled-components"

interface DrawerTypes {
    setDrawerIsOpen: Dispatch<SetStateAction<boolean>>
}

const Drawer = ({ setDrawerIsOpen }: DrawerTypes) => {
    return (
        <TWDrawer>
            <TWCloseButton onClick={() => setDrawerIsOpen(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </TWCloseButton>

            <TWItem />
            <TWItem />
            <TWItem />

            <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </button>
        </TWDrawer>
    )
}

const TWDrawer = tw.div`
    bg-white
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

const TWItem = tw.div`
    border-solid
    border-black
    border
    w-10
    h-10
    m-10
`

const TWCloseButton = tw.button`
    absolute
    mt-5
    ml-5
    invisible
    md:visible
`

export default Drawer