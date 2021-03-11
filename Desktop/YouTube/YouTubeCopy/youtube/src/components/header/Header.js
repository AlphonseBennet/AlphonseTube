import React, {useState, useEffect} from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Avatar from '@material-ui/core/Avatar'
import {Link} from 'react-router-dom'
import {makeStyles, Modal, Button, Input} from '@material-ui/core';
import {auth, db} from '../../Firebase'

function getModalStyle() {
    const top = 50;
    const left = 50;
  
  
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%`,
  
    }
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2,4,3),
    },
  }));


const Header = ({user}) => {
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const [inputSearch, setInputSearch] = useState('');
    const [open, setOpen] = useState(false);
    const [openSignIn, setOpenSignIn] = useState(false);
    const [posts, setPosts] = useState([]);
    const [channelName, setChannelName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const signUp = (event) => {

        event.preventDefault();
  
        auth.createUserWithEmailAndPassword(email, password,)
        .then((authUser) => {
          return authUser.user.updateProfile({
          displayName: channelName,
        
          })
        })
        .catch((error) => alert(error.message));
  
        setOpen(false)
    }
  
    const signIn = (event) => {
      event.preventDefault();
  
      auth.signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message));
  
      setOpenSignIn(false);
    }
  
    const signOut = (event) => {
      auth.signOut();
        
    }

    return (
        <div className="header">

            <Modal open={open} onClose={() => setOpen(false)}>
                <div style={modalStyle} className={classes.paper}>
                    <center>
                        <img className="modalImage signUpLogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1200px-Logo_of_YouTube_%282015-2017%29.svg.png" alt=""/>
                    </center>

                    <form className="appSignUp">

                        <Input type="text" placeholder="Channel Name" value={channelName} onChange={(e) => setChannelName(e.target.value)} />

                        <Input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />

                        <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

                        <Input type="file" placeholder="Profile Picture" />

                        <Button onClick={signUp}>Sign up</Button>
                    </form>
          
                </div>
            </Modal>

            <Modal open={openSignIn} onClose={() => setOpenSignIn(false)}>
                <div style={modalStyle} className={classes.paper}>
                    <center>
                        <img className="modalImage signUpLogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1200px-Logo_of_YouTube_%282015-2017%29.svg.png" alt=""/>
                    </center>

                    <form className="appSignUp">

                        <Input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />

                        <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

                        <Button onClick={signIn}>Sign in</Button>
                    </form>
          
                </div>
            </Modal>

            <div className="headerLeft">
                <div className="menuIcon">
                    <MenuIcon className="menuIcon"/>
                </div>
                <Link to="/">
                    <img className="headerLogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1200px-Logo_of_YouTube_%282015-2017%29.svg.png" alt="" />
                </Link>
            </div>
            <div className="headerCenter">
                <input value={inputSearch} onChange={e => setInputSearch(e.target.value)} placeholder="Search" type="text" />
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className="headerInputButton"/>
                </Link>
                
            </div>
            <div className="headerRight">
            {user ? (
                <Button onClick={signOut}>Sign Out</Button>
            ): (
                <div className="signInOut">
                <Button onClick={() => setOpen(true)}>Sign Up</Button>
                <Button onClick={() => setOpenSignIn(true)}>Sign In</Button>
                </div>
            )}
                <div className="headerRightMedia">
                <VideoCallIcon className="headerIcon "/>
                <AppsIcon className="headerIcon "/>
                <NotificationsIcon className=" headerIcon "/>
                </div>
                <div className="avatarIcon">
                <Avatar  alt="Alphonse Bennet" src=""/>
                </div>
            </div>
        </div>
    )
}

export default Header
