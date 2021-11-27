import React from 'react'
import CoverImg from '../media/img/test-img.JPG'
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import CommentIcon from '@material-ui/icons/Comment'
import MailIcon from '@material-ui/icons/Mail';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import ImageIcon from '@material-ui/icons/Image';
import Confetti from './Confetti/Confetti'
function Home() {
    const [driv, setdriv] = React.useState(<div></div>) 
    var countDownDate = new Date("Nov 26, 2021 00:31:00").getTime();
    var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("days").innerHTML = days + "d " 
    document.getElementById("hours").innerHTML = hours + "h "
    document.getElementById("minutes").innerHTML = minutes + "m "
    document.getElementById("seconds").innerHTML = seconds + "s ";
    
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("sec").style.display = "none"
        document.getElementById("reveal").innerHTML = "Happy B'day Nazla";
        return(
            setdriv(<Confetti start={true}/>)
        )
    }
        }, 1000);
    const buttonstyle={
        backgroundColor: '#1fd1f9',
        backgroundImage: 'linear-gradient(315deg, #1fd1f9 0%, #b621fe 74%)',
        borderRadius: '0px',
    }
    const fabstyle={
        backgroundColor: '#045de9',
        backgroundImage:' linear-gradient(315deg, #045de9 0%, #09c6f9 74%)',
    }
     
    return (
        <div className="HomePage">
            <div className="canvas">
                <div className="title">
                    <h1>Nazla's 18<sup>th</sup> B'day</h1>
                </div>
                <div className="tobeflexed">
                <div className="groued-left">
                    <div className="img">
                        <img src="https://firebasestorage.googleapis.com/v0/b/nazla18.appspot.com/o/cov.jpg?alt=media&token=add41d4b-d2af-46c1-a67e-664f40c6b252" alt="nazla's photo" />
                    </div>
                </div>
                <div className="grouped-right">
                    <div className="timer" id="timer">
                        <div id="reveal" style={{fontFamily: 'Platform'}}></div>
                        <div id="sec">
                            <div id="days" className="tab">

                            </div>
                            <div id="hours" className="tab">
                                
                            </div>
                            <div id="minutes" className="tab">
                                
                            </div>
                            <div id="seconds" className="tab">
                                
                            </div>
                        </div>
                    </div> <br />
                    <div className="bday-date">
                        <h2>26th November</h2>
                    </div> <br />
                    <div className="spotify-embed-player">
                    <iframe src="https://open.spotify.com/embed/playlist/1dlwfSyCSsS17rRNYfrmmT?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                    </div> <br />
                    <div className="buttons">
                        <div className="msg-button">
                        <Button variant="contained" style={buttonstyle} onClick={()=>{document.getElementById('comentpage').scrollIntoView()}}>Wish Here</Button>
                        </div>
                        <br />
                        <div className="fab-button" style={{display: 'flex'}}>
                        <div className="gallery-button">
                        <Fab color="primary" aria-label="add" style={fabstyle}onClick={()=>{document.getElementById('comentpage').scrollIntoView()}}>
                            <CommentIcon />
                        </Fab>
                        </div> 
                         &emsp;
                        <div className="letter-button">
                        <Fab color="primary" aria-label="add" style={fabstyle} onClick={()=>{document.getElementById('letters').scrollIntoView()}}>
                            <MailIcon />
                        </Fab>
                        </div> &emsp;
                        
                        <div className="down-button">
                        <Fab color="primary" aria-label="add" style={fabstyle} onClick={()=>{document.getElementById('gallery').scrollIntoView()}}>
                            <ImageIcon />
                        </Fab>
                        </div>  &emsp;  
                        <div className="spotify">
                        <Fab color="primary" aria-label="add" style={fabstyle} href="https://open.spotify.com/playlist/1dlwfSyCSsS17rRNYfrmmT?si=93066de9c9e3489a">
                            <LibraryMusicIcon />
                        </Fab>
                        </div>&emsp;
                        <div className="down-button">
                        <Fab color="primary" aria-label="add" style={fabstyle} onClick={()=>{document.getElementById('surprise-page').scrollIntoView()}}>
                            <KeyboardArrowDownIcon />
                        </Fab>
                        </div> 
                        </div> 
                        <br />
                    </div>
               </div>
               </div>
            </div>
           {driv}
        </div>
    )
}

export default Home
