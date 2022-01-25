import './App.css';
import Header from './components/header'
import Sidebar from './components/sidebar'
import FilesView from './components/filesView/FilesView'
import SideIcons from './components/sideIcons'

import GDriveLogo from './media/google-drive-logo.png'

import { auth, provider } from "./firebase";
import { useState } from 'react';

function App() {
  // const [user, setUser] = useState()
  const [user, setUser] = useState({
    displayName: "David Rakosi",
    email: "david@cleverprogrammer.com",
    emailVerified: true,
    phoneNumber: null,
    photoURL: "https://www.stockadda.com/media/uploads/photos/4295/7912/67234b71b2d6c6a509a8b66e284f0190_thumbnail.jpg"
  })

  const handleLogin = () => {
    if (!user) {
      auth.signInWithPopup(provider).then((result) => {
        setUser(result.user)
        console.log(result.user)
      }).catch((error) => {
        alert(error.message);
      });
    } else if (user) {
      auth.signOut().then(() => {
        setUser(null)
      }).catch((err) => alert(err.message))
    }
  }

  return (
    <div className="app">
      {
        user ? (
          <>
            <Header userPhoto={user.photoURL} />
            <div className="app__main">
              <Sidebar />
              <FilesView />
              <SideIcons />
            </div>
          </>
        ) : (
            <div className='app__login'>
              <img src={GDriveLogo} alt="Google Drive" />
              <button onClick={handleLogin}>Log in to Google Drive</button>
            </div>
          )
      }
    </div>
  );
}

export default App;
