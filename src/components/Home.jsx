import React, { Component } from 'react'


 class Home extends Component {

    state = {
        videos: []
    }
    

     render() {
       


        return (
            <>

            <div>
                <h1>HOMEPAGE check out the dope new music videos OUT NOW!</h1>
            </div>
            
            <div classname="container">
            <h2>THIS WEEKS HOTTEST MUSIC VIDEOS ARE IN</h2>
                <p> {this.state.name}</p>
            </div>

            

            </>
        )
    }
}

export default Home
