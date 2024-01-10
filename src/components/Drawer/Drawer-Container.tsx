import { Dispatch, SetStateAction, useEffect } from "react";
import Drawer from "./Drawer";

interface DrawerTypes {
    drawerIsOpen: boolean
    setDrawerIsOpen: Dispatch<SetStateAction<boolean>>
}

const DrawerContainer = ({ drawerIsOpen, setDrawerIsOpen }: DrawerTypes) => {

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
        <Drawer drawerIsOpen={drawerIsOpen} setDrawerIsOpen={setDrawerIsOpen} />
    )
}

export default DrawerContainer