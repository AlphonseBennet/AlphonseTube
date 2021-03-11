import React from 'react'
import './VideoRow.css'

const VideoRow = ({views, subs, desc, timestamp, channel, title, image}) => {
    return (
        <div className="videoRow">
            <img src={image} alt=""/>
            <div className="videoRowText">
                <h3>{title}</h3>
                <p className="videoRowHeadline">
                    {channel} • 
                        <span className="videoRowSubss">
                            <span className="videoRowSubs">{subs}</span> Subscribers 
                        </span> 
                    • {views} views • {timestamp}
                </p>
                <p className="videoRowDesc">{desc}</p>
            </div>
        </div>
    )
}

export default VideoRow
