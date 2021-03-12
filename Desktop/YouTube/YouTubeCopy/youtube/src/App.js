import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import Recommended from './components/recommended/Recommended'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SearchPage from './components/searchpage/SearchPage'
import UploadForm from './components/upload/UploadForm'
import {makeStyles, Modal, Button, Input} from '@material-ui/core';
import {auth, db} from './Firebase'
import VideoPage from './components/video/VideoPage';
import MobileUpload from './components/mobileUpload/MobileUpload'
import TrendingPage from './components/trending/TrendingPage'


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


function App() {
  const [openSignUp, setOpenSignUp] = useState(false);
  const [openSignIn, setOpenSignIn] = useState(false);
  const [user, setUser] = useState(null);


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser)
      } else {
        setUser(null);
      }
    })

    console.log(user);
    

    return () => {
      unsubscribe();
    }
    }, [user]);


  return (
    <div className="app">
      <Router>
        <Header user={user} />
        <Switch>
          <Route path="/trending">
            <div className="appPage">
              <Sidebar />
              <TrendingPage user={user}/>
            </div>
          </Route>

          <Route path="/video/:videoId">
            <div className="appPage">
              <Sidebar />
            <VideoPage user={user}/>
            </div>
          </Route>

          <Route path="/upload">
            <div className="appPage">
            <Sidebar />
            <UploadForm user={user}/>
            </div>
          </Route>

          <Route path="/search/:searchTerm">
            <div className="appPage">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>

          <Route path="/">
            <div className="appPage">
              <Sidebar />
              <Recommended user={user} />
              
            </div>
            <div className="mobileComponent">
            <MobileUpload />
            </div>
             
          </Route>

        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
