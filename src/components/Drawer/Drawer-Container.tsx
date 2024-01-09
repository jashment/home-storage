import Drawer from "./Drawer";

interface DrawerTypes {
    drawerIsOpen: boolean
}

const DrawerContainer = ({drawerIsOpen}: DrawerTypes) => {
    return (
        <Drawer drawerIsOpen={drawerIsOpen} />
    )
}

export default DrawerContainer