import React, { useState } from 'react'

//EACH VIDEO BEING MADE IS HERE AND if you want to edit each one thats being generated.

//USING A FUNCTIONAL STATEMENT HELPED WITH MAKING EACH ITEM EASIRE TO MANAGE SEPARTLEY 

 const VideoItem = ({song, rapper, director, cover_art}) => {
    
  const [likes,setLikes] = useState(0)
    

        return (
            <div id="v_item" className="v_item">
            
            <h4>RAPPER NAME: {rapper}</h4>
            <p>SONG: {song}</p>
            <p>DIRECTOR: {director}</p>
            <br></br>
            <img src={cover_art} alt="cover art" width="400" height="400"/> 


            <br></br>
            <button onClick={()=> setLikes(likes+35)}>{likes}</button>
            <br></br>
            
            
        </div>
        )
     
}

export default VideoItem 
{/* {/* {/* <p>CAMP: {this.props.rapper.camp}</p> */}