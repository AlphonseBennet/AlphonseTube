import React from 'react'
import {Button} from '@material-ui/core'
import {Link} from 'react-router-dom'
import './MobileUpload.css'

const MobileUpload = () => {
    return (
        <div className="mobileUploadComponent">
            <Link to="/upload" className="uploadButton">
                <Button className="uploadButtonColor"><h4 className="">Upload Video</h4></Button>
            </Link>
        </div>
    )
}

export default MobileUpload
