import HomePage from './Pages/Home'
import SurprisePage from './Pages/Surprise/Surprise'
import './App.css';
import Comments from './Pages/Comments/Comments'
import Letters from './Pages/Letters/Letters'
import Gallery from './Pages/Gallery/Gallery';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import React from 'react'
const footerstyle={
  color: 'white',
  position: 'relative',
  bottom: '0px',
  background: 'black',
  width: '100%',
  padding: '16px 0px',
  textAlign: 'center',
  fontSize: '13px',
  fontFamily: 'Platform'
}
function App() {
  return (
    <div className="App">
      <HomePage />
      <Comments />
      <Letters />
      <Gallery />
      <SurprisePage />
      <footer style={footerstyle} id="foot">
        <h2>This App was Made By Naazim Jalal</h2><br />
        <h3>Checkout more apps on - <a href="https://naazim-apps.web.app/" className="linka">naazim-apps.web.app</a></h3>
        <h3>Instagram <InstagramIcon /> - <a href="https://www.instagram.com/naazim.jalal/" className="linka">instagram.com/naazim.jalal/</a></h3>
        <h3>Github <GitHubIcon /> - <a href="https://github.com/naazimjalal" className="linka">github.com/naazimjalal</a></h3>
      </footer>
    </div>
  );
}

export default App;
