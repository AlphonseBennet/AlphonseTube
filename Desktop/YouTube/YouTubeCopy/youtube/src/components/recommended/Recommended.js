import React, {useState, useEffect} from 'react'
import './Recommended.css'
import VideoCard from '../video/VideoCard'
import {auth, db} from '../../Firebase.js'

const Recommended = ({user}) => {

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        
        db.collection('videos').onSnapshot(snapshot => {
          setVideos(snapshot.docs.map(doc => ({
            id: doc.id,
            video: doc.data()
          })));
          console.log("Videos:", videos);
        })
        console.log(user)
      }, []);

    return (
        <div className="recommended">
            <h2 className="recommendedText">New Videos</h2>
            <div className="recommendedVideo">
            {
                videos.map(({id, video}) => (
                    <VideoCard 
                    key={id}
                    videoId={id}
                    title={video.title}
                    views={video.views}
                    timestamp={video.timestamp}
                    channelImage={video.channelImage}
                    channel={video.channel}
                    image={video.image} 
                    link={video.link}
                    video={video.video}/>
                    
                ))
            }

            </div>
        </div>
    )
}

export default Recommended
