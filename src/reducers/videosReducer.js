// const initialState = {
//     videos: []  
// }



const videosReducer = (state = {videos: [], requesting: true}, action) => {
    switch (action.type) {
        case "START_FETCHING_VIDEOS":
            console.log("START_FETCHING_VIDEOS")
            return {
                ...state,
                requesting: true
            }
            break;
        case "START_ADDING_VIDEOS":
            console.log("START_ADDING_VIDEOS")
            return {
                ...state,
                requesting: true
            }
            break;
        case "ADDING_VIDEOS":
            console.log("ADDING_VIDEOS")
                return {
                    ...state,
                    requesting: false,
                    videos: [...action.videos]
                }
                break;
        case "ADDING_VIDEO":
                    // debugger
                    console.log("ADDING_VIDEO ACTION")
                    return {
                        ...state,
                        requesting: false,
                        videos: [...state.videos, action.video]
                    }
            // break;
            
            default:
                return state
                break;
            }
        }
        
        export default videosReducer

