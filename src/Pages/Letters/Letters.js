import React from 'react' 
import Carousel from "react-elastic-carousel";
import {Card} from '@material-ui/core'
import './Letters.css'
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  const cardstyle={
    width: '210px',
    height: '345px',
    padding: '17px 16px',
    fontFamily: 'Platform'
  }
function Letters() {
    const items = [
        {
            title: "To my lovely daughter Poopsy.",
            text: "Time has travelled really fast and that can only be fathomed when I look at you from a new born baby in Nov 2003 you have grown into a well matured. knowledgeable and compassionate person. As a father I might not have invested ...",
            by: "- Dad",
            link: "https://heyzine.com/flip-book/f619abd1c0.html#page/1",
            linktext: "Read More"
        },
        {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum ",
            by: "Lorem ipsum dolor"
        },
        {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum ",
            by: "Lorem ipsum dolor"
        }
    ]
    const Letter =({message, by, title, link, linktext})=>{
        return(
            <Card style={cardstyle}>
                <h3>{title}</h3><br />
                <h3>{message}</h3>
                <a href={link}>{linktext}</a>
                <br /><br />
                <h4>{by}</h4>
            </Card>
        )
    }
    return (
        <div id="letters">
            <br /><br />
            <br /><br />
            <h2 style={{textAlign: 'center', color: 'white', fontFamily: 'Geometos'}}>Letters</h2>
            <br /><br />
            <Carousel breakPoints={breakPoints}>
                {items.map(item => <Letter message={item.text} by={item.by} link={item.link} linktext={item.linktext} title={item.title}/>)}
            </Carousel>
            <br />
            <Carousel breakPoints={breakPoints}>
                {items.map(item => <Letter message={item.text} by={item.by}/>)}
            </Carousel>
            <br /><br />
            <br /><br />
        </div>
    )
}

export default Letters
