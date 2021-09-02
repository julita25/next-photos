import React from 'react'
import {useContext} from 'react'
import {likeContext} from './SinglePic'
import {RiThumbUpLine, RiThumbUpFill} from "react-icons/ri"
import styles from '../styles/Home.module.css'

function Like() {
    const {like, setLike} = useContext(likeContext)//uses like context and depending if user clicks like or not stores new value
    return (
        <div  className={styles.contain} onClick={() =>setLike(!like)}>
            <i className={styles.like}>{like ? <RiThumbUpFill/> : <RiThumbUpLine/>}</i>
        </div>
    )
}

export default Like
