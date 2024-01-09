import { Dispatch, SetStateAction } from "react";
import Drawer from "./Drawer";

interface DrawerTypes {
    setDrawerIsOpen: Dispatch<SetStateAction<boolean>>
}

const DrawerContainer = ({ setDrawerIsOpen}: DrawerTypes) => {
    return (
        <Drawer setDrawerIsOpen={setDrawerIsOpen} />
    )
}

export default DrawerContainer