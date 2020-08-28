import React from 'react'
import "./SidebarRow.css"

function SidebarRow(props) {
    return (
        <div className={`sidebarRow ${props.selected && "selected"}`}>
            <props.Icon className="sidebarRow__icon" />
            <h2 className="sidebarRow__title">{props.title}</h2>
        </div>
    )
}

export default SidebarRow
