import React from 'react'
import ImageGallery from 'react-image-gallery';
import imgdata from './imgdata'
import './Gallery.css'
function Gallery() {
    return (
        <div id="gallery" >
            <br /><br />
            <ImageGallery items={imgdata}/>
            <br /><br />
            
        </div>
    )
}

export default Gallery
