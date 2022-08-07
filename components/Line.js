import React, { useEffect, useState } from 'react';
import SignOut from './SignOut';
import { auth, db } from '../firebase.js'
import SendMessge from './SendMessge';

function Line() {
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        db.collection("messages")
        .orderBy("createdAt")
        .limit(50)
        .onSnapshot((snapshot) => {
            setMessages(snapshot.docs.map((doc) => doc.data()));
        })
    },[]);
  return (
    <div>
        {console.log(messages)}
        <SignOut />
        <div className='msgs'>
            {messages.map(({id, text, photURL, uid}) => (
               <div>
                   <div key={id}
                   className={`msg ${uid === auth.currentUser.uid ? "send" : "received"}`}>
                       <img src={photURL} alt=""/>
                       <p>{text}</p>

                       </div>
                </div> 
            ))}
        </div>

        <SendMessge />

    </div>
  )
}

export default Line