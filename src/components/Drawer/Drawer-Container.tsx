import { Dispatch, SetStateAction } from "react";
import Drawer from "./Drawer";

interface DrawerTypes {
    drawerIsOpen: boolean
    setDrawerIsOpen: Dispatch<SetStateAction<boolean>>
}

const DrawerContainer = ({ drawerIsOpen, setDrawerIsOpen }: DrawerTypes) => {
    return (
        <Drawer drawerIsOpen={drawerIsOpen} setDrawerIsOpen={setDrawerIsOpen} />
    )
}

export default DrawerContainer