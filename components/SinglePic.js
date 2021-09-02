import React, { createContext, useState } from 'react'
import Image from "next/image"
import styles from '../styles/Home.module.css'
import Like from './Like'

export const likeContext = createContext()



function SinglePic({image}) {
  
   const [like,setLike] = useState(false)
 
    return (
        <div  className={styles.card}>
            <Image //image optimization, smaller transfered sized, loads as the user scrolls down
                alt="random pic"
                layout="responsive"
                quality={100}
                width={800}
                height={800}
                src={image} 
                />
           <likeContext.Provider value={{like, setLike}}> {/*takes like value */}    
                <Like/>  
            </likeContext.Provider>
            
        </div>
    )
}

export default SinglePic
