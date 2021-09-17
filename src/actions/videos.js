

export const fetchVideos = () => {

    return dispatch => {
        dispatch({type: "START_FETCHING_VIDEOS"})
        fetch("http://localhost:3001/videos")
        .then(resp => resp.json())
        .then(videos => {
            dispatch({type:"ADDING_VIDEOS", videos})
        })
    }

}

export const addVideo = (video) => {
    return dispatch => {
        // debugger
        dispatch({type: "START_ADDING_VIDEO"})
        let params = { 
            video
        } 
    //method to our back end is to post this data => database
        fetch("http://localhost:3001/videos", { 
            "method": "POST",
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },

            "body": JSON.stringify(params)
        })
        .then(resp => resp.json())
        .then(video => {
            dispatch({type:"ADDING_VIDEO", video})
        })
    }

}