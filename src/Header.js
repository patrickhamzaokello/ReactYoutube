import React from 'react'
import './Header.css'
import MenuIcon from "@material-ui/icons/Menu"
import SearchIcon from "@material-ui/icons/Search"
import VideoCallIcon from "@material-ui/icons/VideoCall"
import AppsIcon from "@material-ui/icons/Apps"
import NotificationsIcon from "@material-ui/icons/Notifications"
import Avatar from "@material-ui/core/Avatar";




function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon />
                <img
                    className="header__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
                    alt=""
                />
            </div>

            <div className="header__input">
                <input placeholder="Search" type="text" />
                <SearchIcon className="header__inputButton" />
            </div>

            <div className="header__icons">
                <VideoCallIcon  className="header__icon" />
                <AppsIcon className="header__icon" />
                <NotificationsIcon className="header__icon" />
                <Avatar
                    alt="patrick hamza"
                    src="https://avatars2.githubusercontent.com/u/41443166?s=460&u=794643de8ee050ee778fcc9fa713d68cbfcdf449&v=4"
                />
            </div>


        </div>
    )
}

export default Header
