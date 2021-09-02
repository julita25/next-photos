import React from 'react'
import SinglePic from './SinglePic'


function Gallery({images}) {
 

    return (
        <>
            {images.hits.map(image => 
            
              <SinglePic 
                key={image.id} 
                image={image.previewURL}
                />

           
            )}
            
        </>
    )
}

export default Gallery
