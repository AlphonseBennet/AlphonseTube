import React, {useState} from 'react'
import './UploadForm.css'
import {Button, Input} from '@material-ui/core'
import firebase from 'firebase';
import {storage, db} from '../../Firebase'


const UploadForm = ({user}) => {
    const [progress, setProgress] = useState(0);
    const [title, setTitle] = useState("");
    const [views, setViews] = useState("");
    const [image, setImage] = useState(null);
    const [link, setLink] = useState("");
    const [description, setDescription] = useState("");
    const [video, setVideo] = useState(null);

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleChangeVideo = (e) => {
        if (e.target.files[0]) {
            setVideo(e.target.files[0]);
        }
    };

    const uploadComplete = (imageURL, videoURL) => {
        db.collection("videos").add({
            //timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            description: description,
            title: title,
            image: imageURL,
            channel: user.displayName,
            views: 0,
            video: videoURL,
            likes: 0,
            dislikes: 0,
        })
        setProgress(0);
        setTitle("");
        setImage(null);
        setLink("");
        setDescription("");
    }

    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        const uploadVideoTask = storage.ref(`videoFile/${video.name}`).put(video);

        let uploadImageURL = null
        let uploadVideoURL = null

        uploadTask.on(
            "state_changed",
            (snapshot) => {
            
            },
            (error) => {
                console.log(error);
                alert(error.message);
            },
            () => {
                storage.ref("images").child(image.name).getDownloadURL()
                    .then(url => {
                        uploadImageURL = url
                        if (uploadVideoURL !== null) {
                            uploadComplete(uploadImageURL, uploadVideoURL)
                        }
                    })
            }
        )

        uploadVideoTask.on(
            "state_changed",
            (snapshot) => {
                 const progress = Math.round(
                     (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                 );
                setProgress(progress);
            },
            (error) => {
                console.log(error);
                alert(error.message);
            },
            () => {
                storage.ref("videoFile").child(video.name).getDownloadURL()
                    .then(url => {
                        uploadVideoURL = url
                        if (uploadImageURL !== null) {
                            uploadComplete(uploadImageURL, uploadVideoURL)
                        }
                    })
            }
        )
    }

    return (
        <div className="uploadForm">
            
            <div className="uploadText">
                <h2>Upload your video:</h2>
            </div>
            {user ? (
            <form className="uploadInputs">
            
                <Input type="text" placeholder="Title" onChange={event => setTitle(event.target.value)} value={title} className="inputField"/>

                <Input type="text" placeholder="Description" onChange={event => setDescription(event.target.value)} value={description} className="inputField"/>

                <h4>Thumbnail</h4>

                <Input type="file" placeholder="Add a thumbnail" onChange={handleChange} className="inputField"/>

                <h4>Your video</h4>

                <Input type="file" placeholder="Upload your video" onChange={handleChangeVideo} className="inputField"/>

                <Button onClick={handleUpload}>Upload</Button>

                <progress className="progressBar" value={progress} max="100" />
                
            </form>
                ): (<h1>Login to upload</h1>)}
        
        </div>
    )
}

export default UploadForm
