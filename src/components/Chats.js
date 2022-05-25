import React,{useRef,useState,useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';
import { auth } from '../firebase';

import { useAuth } from '../contexts/AuthContext';
import axios from 'axios';
const Chats =()=>{

    const history=useHistory();
    const {user}=useAuth();
    const [loading,setLoading]=useState(true);
    const handleLogout=async()=>{
        await auth.signOut();
        history.push('/');
    }

    useEffect(() => {
        if(!user) {
            history.push('/');
            return;
        }
        axios.get('https://api.chatengine.io/users/me',{
            headers: {
                "project-id":"",
                "user-name":user.email,
                "user-secret":user.id,
            }
        })
        .then(()=>{
           setLoading(false); 
        })
    }, [user,history]);

//    if(!user || loading) return 'Loading...' ;
    return (
       <div className='chats-page'>
           <div className='nav-bar'>
               <div className='logo-tab'>
                   SmartChat
               </div>
               <div onClick={handleLogout} className='logout-tab'>
                   Logout
               </div>
           </div>
           <ChatEngine height="calc(100vh-66px)"
           projectId="" 
           userName={user.email}
           userSecret={user.id}/>
       </div>
    );
}

export default Chats;