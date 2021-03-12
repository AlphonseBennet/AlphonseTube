import React from 'react'
import {Button} from '@material-ui/core'
import {Link} from 'react-router-dom'
import './MobileUpload.css'
import AddIcon from '@material-ui/icons/Add';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';

const MobileUpload = () => {
    return (
        <div className="mobileUploadComponent">            
            <Link to="/trending" className="uploadButton">
                <WhatshotIcon />
            </Link>
            <Link to="/upload" className="uploadButton ">
                <AddIcon className="addButton"/>
            </Link>
            <Link to="" className="uploadButton">
                <SubscriptionsIcon />
            </Link>
        </div>
    )
}

export default MobileUpload
