import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import './VideoCard.css'
import {Link} from 'react-router-dom'
import {storage, db} from '../../Firebase'
import firebase from 'firebase'

const VideoCard = ({ videoId, image, title, channel, views, timestamp, channelImage, link, video}) => {

    const addView = () => {
        db.collection("videos").doc(videoId).update({
            views: firebase.firestore.FieldValue.increment(1),

        })
            
    }

    return (
        <Link to={`/video/${videoId}`} className="videoLink" onClick={addView}>
        <div className="videoCard" >
            <a href={link} className="videoLink">
            <img className="videoCardThumbnail" src={image} alt="" />
            <div className="videoCardInfo">
                <Avatar className="videoInfoAvatar" alt={channel} src={channelImage} />
                <div className="videoCardText">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>{views} views • {timestamp}</p>
                </div>
            </div>
            </a>
        </div>
        </Link>
    )
}

export default VideoCard