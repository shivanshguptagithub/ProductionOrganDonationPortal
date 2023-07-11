import { useState, useEffect } from 'react';
import axios from 'axios';
import Profile from './Profile';
import Login from './Login';

const ProfilePage = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    axios.get('/api/authenticated').then((res) => {
      if(res.status===200)
      {
        setAuthenticated(true);
        //window.location.reload();
      }
      
    });
  }, []);

  return (authenticated)?<Profile/>:<Login/>
};

export default ProfilePage;
