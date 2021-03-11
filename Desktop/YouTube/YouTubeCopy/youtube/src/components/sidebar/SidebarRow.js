import React from 'react'
import './SidebarRow.css'

const SidebarRow = ({selected, Icon, title}) => {
    return (
        <div className={`sidebarRow ${selected && 'selected'}`}>
            <Icon className="sidebarRowIcon"/>
            <h2 className="sidebarRowTitle">{title}</h2>
        </div>
    )
}

export default SidebarRow
