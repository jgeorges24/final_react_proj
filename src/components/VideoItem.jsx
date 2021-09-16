import React, { useState } from 'react'

 const VideoItem = ({song, rapper, director, cover_art}) => {
    
//   const [likes,setLikes] = useState(0)
    

        return (
            <div>
            
            <h4>RAPPER NAME: {rapper}</h4>
            <p>SONG: {song}</p>
            <p>DIRECTOR: {director}</p>
            <br></br>
            <img src={cover_art} alt="cover art"/> 
            {/* <br></br>
            <button onClick={()=> setLikes(likes+35)}>{likes}</button>
            <br></br> */}
            {/* <p>CAMP: {this.props.rapper.camp}</p> */}
        </div>
        )
     
}

export default VideoItem
