import { Dispatch, SetStateAction, useEffect } from "react"
import tw from "tailwind-styled-components"

interface DrawerTypes {
    drawerIsOpen: boolean
    setDrawerIsOpen: Dispatch<SetStateAction<boolean>>
}

const Drawer = ({ drawerIsOpen, setDrawerIsOpen }: DrawerTypes) => {
    const TWDrawer = tw.div`
    bg-white
    flex
    border-solid
    border-black
    border-t
    bottom-0
    w-full
    fixed
    h-20
    items-center
    justify-around
    drop-shadow-xl
    md:border-t-0
    md:border-r
    md:h-full
    md:w-32
    md:flex-col
    md:items-center

    transition-transform 
    transform 
    duration-1000 
    ${() => drawerIsOpen ? 'translate-x-0' : '-translate-x-full'}
`

const handleResize = () => {
    const windowWidth = window.innerWidth;
    setDrawerIsOpen(windowWidth <= 768);
  };

  useEffect(() => {
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
    return (
        <TWDrawer>
            <TWCloseButton onClick={() => setDrawerIsOpen(!drawerIsOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
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



const TWItem = tw.div`
    border-solid
    border-black
    border
    w-10
    h-10
    m-10
`

const TWCloseButton = tw.button`
    invisible
    md:visible
`

export default Drawer