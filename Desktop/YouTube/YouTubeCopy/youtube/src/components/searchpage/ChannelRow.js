import React from 'react'
import './ChannelRow.css'
import {Avatar} from '@material-ui/core'
import VerifiedIcon from '@material-ui/icons/CheckCircleOutlineOutlined'

const ChannelRow = ({ image, channel, subs, desc, verified, numOfVids}) => {
    return (
        <div className="channelRow">
            <Avatar className="channelRowLogo" alt={channel} src={image} />
            <div className="channelRowText">
                <h4>{channel} {verified && <VerifiedIcon />} </h4>
                <p>{subs} subscribers • {numOfVids} videos</p>
                <p>{desc}</p>
                
            </div>

        </div>
    )
}

export default ChannelRow
