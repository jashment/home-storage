import tw from "tailwind-styled-components"

const Drawer = () => {
    return (
        <TWDrawer>
            <TWDrawerButton>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

            </TWDrawerButton>


            <TWItem />
            <TWItem />
            <TWItem />
            <TWItem>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </button>
            </TWItem>

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