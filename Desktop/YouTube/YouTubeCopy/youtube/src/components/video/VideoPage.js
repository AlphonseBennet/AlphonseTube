import React, {useState, useEffect} from 'react'
import { withRouter } from 'react-router-dom';
import './VideoPage.css'
import {auth, db} from '../../Firebase.js'
import {Button, Avatar} from '@material-ui/core'
import firebase from 'firebase'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import { render } from 'react-dom';



const VideoPage = ({ match, user }) => {

    const [videoInfo, setVideoInfo] = useState({});
    const [videoId, setVideoId] = useState(match.params.videoId);
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
    const [liked, setLiked] = useState(false);
    const [disliked, setDisliked] = useState(false);
    const [currentLikes, setCurrentLikes] = useState(videoInfo.likes);

    console.log("Math props:", videoId)
    
    useEffect(async () => {
        const snapshotData = (await db.collection('videos').doc(videoId).get()).data()
        
        setVideoInfo(snapshotData)
        
    }, [])

    useEffect(() => {
        let unsubscribe;
        if (videoId) {
            unsubscribe = db
            .collection("videos").doc(videoId).collection("comments").orderBy('timestamp', 'desc')
            .onSnapshot((snapshot) => {
                setComments(snapshot.docs.map((doc) => doc.data()));
            })
         }

         return () => {
             unsubscribe();
         };
    }, [videoId]);

    const postComment = (event) => {
        if (user) {
            event.preventDefault();

        db.collection("videos").doc(videoId).collection("comments").add({
            message: comment,
            channel: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        setComment(''); 
        } else {
            alert("Sign in to")
        }
        
    }

    const addLike = () => {
        if (user) {
            if (liked === false && disliked === false) {
                db.collection("videos").doc(videoId).update({
                    likes: firebase.firestore.FieldValue.increment(1)
                })
                
                setLiked(true);
                setDisliked(false);
                setVideoInfo(Object.assign({}, videoInfo, { likes: videoInfo.likes + 1 }))
                
            } else if (liked === false && disliked === true) {
                db.collection("videos").doc(videoId).update({
                    likes: firebase.firestore.FieldValue.increment(1)
                })
                db.collection("videos").doc(videoId).update({
                    dislikes: firebase.firestore.FieldValue.increment(-1)
                })
                setLiked(true)
                setDisliked(false)
                setVideoInfo(Object.assign({}, videoInfo, { likes: videoInfo.likes + 1, dislikes: videoInfo.dislikes - 1 }))
            } else {
                db.collection("videos").doc(videoId).update({
                    likes: firebase.firestore.FieldValue.increment(-1)
                })
                setLiked(false);
                setVideoInfo(Object.assign({}, videoInfo, { likes: videoInfo.likes - 1 }))
            }
        } else {
            alert("Sign in")
        }
        
        
    }

    const addDislike = () => {
        if (user) {
            if (disliked === false && liked === false) {
                db.collection("videos").doc(videoId).update({
                    dislikes: firebase.firestore.FieldValue.increment(1)
                })
                setDisliked(true);
                setLiked(false);
                setVideoInfo(Object.assign({}, videoInfo, {dislikes: videoInfo.dislikes + 1}))
            } else if (disliked === false && liked === true) {
                db.collection("videos").doc(videoId).update({
                    dislikes: firebase.firestore.FieldValue.increment(1)
                })
                db.collection("videos").doc(videoId).update({
                    likes: firebase.firestore.FieldValue.increment(-1)
                })
                setLiked(false);
                setDisliked(true);
                setVideoInfo(Object.assign({}, videoInfo, {dislikes: videoInfo.dislikes + 1, likes: videoInfo.likes - 1}))
            }
            else {
                db.collection("videos").doc(videoId).update({
                    dislikes: firebase.firestore.FieldValue.increment(-1)
                })
                setDisliked(false);
                setVideoInfo(Object.assign({}, videoInfo, {dislikes: videoInfo.dislikes - 1}))
            }
        } else {
            alert("Sign in")
        }
        
    }

    // const subToChannel = () => {
    //     if (user) {
    //         db.collection("users").doc(userId).collection("subscriptions").add({
    //             subscription: videoInfo.channel,
    //         })
    //     } else {
    //         alert("Sign in!")
    //     }

    const signInTo = () => {
        console.log("Sign in to like");
    }
    

    return (
        <div className="videoPage">
            <br />
            <br />
            <br />
            <video  src={videoInfo.video} width="60%" height="277.28" controls className="mediaPlayer">
            </video>
            <div className="videoInformation">
            <h2 className="videoTitle">{videoInfo.title}</h2>
            
            {videoInfo.views} views
            </div>
            <div >
                {videoInfo.timestamp}
                <br />
                <br />
                <div className="like">
                    <div onClick={addLike} >
                        {liked === false ? (<ThumbUpAltIcon className="likeDislike"/> ): (<ThumbUpAltIcon color="primary" className="likeDislike" />)}
                    </div>
                
                <p>{videoInfo.likes}</p>
                <div  onClick={addDislike}>
                        {disliked === false ? (<ThumbDownAltIcon className="dislikeIcon"/> ): (<ThumbDownAltIcon color="primary" className="dislikeIcon" />)}
                        </div>
                <p>{videoInfo.dislikes}</p>
                </div>
                
                <br />
                <hr width="60%" />
                <br />
                
                <p className="videoInformation1">
                    <div className="videoInfoFirst">
                        <div className="videoInfoLeft">
                            <Avatar />
                            <p><strong>{videoInfo.channel}</strong></p>
                        </div>
                        <div className="videoInfoLeft">
                            <p>0</p>
                            <div>
                            <img className="subButton" src="https://ihitthebutton.com/wp-content/uploads/2020/11/youtube-subscribe-png.png" alt="" />
                                
                            </div>
                        </div>
                    </div>
                    <br />
                    {videoInfo.description}
                </p>
            </div>
            <br />
            <hr width="60%"/>
            <br />
            <h3>Comment:</h3>
            <br />
            <div className="commentSection">
                <p><textarea className="textarea" role="textbox" contenteditable value={comment} onChange={(e) => setComment(e.target.value)} ></textarea></p>
                <Button className="postCommentButton" type="submit" onClick={postComment}>Send</Button>
                <br />
                <br />
                <h3>Comments</h3>
                <br />
                <div className="comments">
                    {comments.map((comment) => (
                       
                        <div className="comment"> 
                            <p className="firstRowComment"> <Avatar  /> <p className="commentChannel"><b> {comment.channel}</b> </p> </p> 
                            <br/>                
                            <p>{comment.message}</p>
                            <br/>
                        </div>
                        
                        
                    ))}
                </div>
            </div>
        </div>
    )
}

export default withRouter(VideoPage)
