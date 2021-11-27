import './Coment.css'
import React, { useRef, useState } from 'react';
import Fab from '@mui/material/Fab';
import TextField from '@mui/material/TextField';
import SendIcon from '@material-ui/icons/Send';
import CakeIcon from '@material-ui/icons/Cake';
import Backdrop from '@mui/material/Backdrop';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import {Button} from '@material-ui/core'; 
import firebase from 'firebase/compat/app';
import firebaseConfig from './firebaseConfig';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import 'firebase/compat/firestore';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
function Comments() {
     
    if (firebase.apps.length===0){
        firebase.initializeApp(firebaseConfig)
    }
    const dummy = useRef();
    const firestore= firebase.firestore()
    const messagesRef = firestore.collection('messages');
    const anmessagesRef = firestore.collection('anonymous');

    const query = messagesRef.orderBy('createdAt').limit(25);
    const [messages] = useCollectionData(query, { idField: 'id' });
    const [anonymous, setanonymous] = useState(false)
    async function sendMessage({value, name}){
        if (anonymous===true){
            var x = 'bhh' 
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
                
            } else {
                x = "Geolocation is not supported by this browser.";
            }
            async function showPosition(position) {
                x = position.coords.latitude +
                ", " + position.coords.longitude;
                console.log(x)
                await anmessagesRef.add({
                    text: value,
                    name: x,
                    createdAt: firebase.firestore.FieldValue.serverTimestamp()
                })
            } 
            
        }else{
        await messagesRef.add({
            text: value,
            name: name,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })}
        setopen(false)
        document.getElementById('nameinput').value =''
        document.getElementById('messageinput').value =''
        dummy.current.scrollIntoView({ behavior: 'smooth' });
    }
    const CommentMessage=({comment, name})=>{
        return(
            <div className="comment-box">
              <h6 style={{paddingBottom: '12px'}}>{name}</h6>
              <h4>{comment}</h4>
            </div>
        )
    }
    const [open, setopen] = React.useState(false)
    let presscount=1;
    const Checkboxjava=()=>{
        presscount = presscount + 1;
        if (presscount%2==0){
            setanonymous(true);
        }else{
            setanonymous(false);

        }
    }
    const buttonstyle={
        backgroundColor: '#1fd1f9',
        backgroundImage: 'linear-gradient(315deg, #1fd1f9 0%, #b621fe 74%)',
        borderRadius: '0px',
        color: 'white',
    }
    const buttonstyleclose={
        backgroundColor:' #f9484a',
        backgroundImage: 'linear-gradient(315deg, #f9484a 0%, #fbd72b 74%)',
        borderRadius: '0px',
        color: 'white',
    }
    const icon={
        backgroundColor: 'rgb(4, 93, 233)',
        backgroundImage:' linear-gradient(315deg, rgb(4, 93, 233) 0%, rgb(9, 198, 249) 74%)',
        color: 'white',
        borderRadius: '50px',
    }
    return (
        <div className="comentpage" id="comentpage" >
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
                
            >
            <Paper elevation={3} style={{height: '60%'}} className="Paperpopup">
                    <h2 className="nameHeading">Your Name</h2><br />
                    &emsp;
                    <div className="firstName">
                       <TextField id="nameinput" placeholder="Enter your name" variant="outlined" style={{width: '100%'}}/>
                    </div><br />

                    &emsp;<Checkbox {...label} onClick={Checkboxjava}/> Send anonymously
                    <br /><br />
                    <h4 style={{width: '80%', fontFamily: 'sans-serif', padding: '10px 15px', color:'tomato'}}>
                     messages are sent instantly however sending anonymous messages take 2-4 hours to show up.
                    </h4>
                    <br />&emsp;
                    <Button style={buttonstyle} onClick={()=>{sendMessage({value: document.getElementById('messageinput').value,
                     name: document.getElementById('nameinput').value})}}>Send Message</Button>
                    &emsp;
                    <Button style={buttonstyleclose} onClick={()=>{setopen(false)}}>Close</Button>
            </Paper>
            </Backdrop>
            <br /> 
            <h1 style={{fontFamily: 'Neuzeit',color: 'white', textAlign: 'center'}} className="Titlecom">
                It'd make Nazla's day even more special if you could wish her here</h1>
            <div className="comment-panel">
                <div className="paddthis">
                    <div>
                    {messages && messages.map(msg => <div><CommentMessage comment={msg.text} name={msg.name}/><br /></div>)}
                    <span ref={dummy}></span>
                    </div>
                </div>
                <div className="inputs">
                    <div className="comment-input">
                        <TextField id="outlined-basic" placeholder="Type your message here" variant="outlined" style={{width: '100%'}} id="messageinput"/>
                    </div>&emsp;
                    <Fab color="primary" aria-label="add" onClick={()=>{setopen(true)}} style={icon}>
                        <SendIcon />
                    </Fab>
                    &emsp;
                    <Fab color="primary" aria-label="add" style={icon} className="cakeicon">
                        <CakeIcon />
                    </Fab>
                </div>
            </div>
            <br /><br />
            <br /><br />
            <br /><br />
        </div>
        
    )
}

export default Comments
