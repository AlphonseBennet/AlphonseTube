import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import HomeIcon from '@material-ui/icons/Home'
import WhatshotIcon from '@material-ui/icons/Whatshot'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import HistoryIcon from '@material-ui/icons/History'
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo'
import WatchLaterIcon from '@material-ui/icons/WatchLater'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined'
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import {Link} from 'react-router-dom'



const Sidebar = () => {
    return (
        <div className="sidebar">
            <Link to="/" className="uploadLink">
                <SidebarRow selected Icon={HomeIcon} title="Home"/>
            </Link>
            <Link to="/trending" className="uploadLink">
                <SidebarRow  Icon={WhatshotIcon} title="Trending" />
            </Link>
            <SidebarRow  Icon={SubscriptionsIcon} title="Subscriptions"/>
            <hr />
            <Link to="/Upload" className="uploadLink">
                <SidebarRow Icon={VideoCallIcon} title="Upload" />
            </Link>
            <SidebarRow Icon={HistoryIcon} title="History" />
            <SidebarRow Icon={OndemandVideoIcon} title="Your videos" />
            <SidebarRow Icon={WatchLaterIcon} title="Watch later" />
            <SidebarRow Icon={ThumbUpAltOutlinedIcon} title="Liked videos" />
            <SidebarRow Icon={ExpandMoreOutlinedIcon}  title="Show more" />
            <hr />
        </div>
    )
}

export default Sidebar
