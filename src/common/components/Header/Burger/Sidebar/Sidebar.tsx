import React from 'react';
import Nav from "../../../Nav/Nav";
import s from "./Sidebar.module.css";

type SidebarPropsType = {
    open: boolean
}

const Sidebar:React.FC<SidebarPropsType> = ({open}) => {

    const sidebarClass = s.sidebar
        + (open ? s.open : '')

    return (
        <aside className={sidebarClass}>
            <Nav/>
        </aside>
    );
};

export default Sidebar;