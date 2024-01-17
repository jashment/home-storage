import { Dispatch, SetStateAction, useEffect, useRef, RefObject } from "react";
import Drawer from "./Drawer";

interface DrawerTypes {
    drawerIsOpen: boolean
  setDrawerIsOpen: Dispatch<SetStateAction<boolean>>
}

const DrawerContainer = ({ drawerIsOpen, setDrawerIsOpen }: DrawerTypes) => {
  const drawerRef: RefObject<HTMLDivElement> = useRef(null);
  const handleResize = () => {
    const windowWidth = window.innerWidth;
    setDrawerIsOpen(windowWidth <= 768);
  };

  const handleOutsideClick = (e: MouseEvent) => {
    const targetNode = e.target as Node;
    if (drawerIsOpen && !drawerRef.current?.contains(targetNode)) {
      setDrawerIsOpen(false);
    }
  };
  
  useEffect(() => {
    handleResize();

    document.addEventListener('click', handleOutsideClick);
    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
    return (
        <Drawer ref={drawerRef} drawerIsOpen={drawerIsOpen} />
    )
}

export default DrawerContainer