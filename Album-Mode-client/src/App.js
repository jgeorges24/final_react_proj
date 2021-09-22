
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom"
import { Switch } from "react-router"
import Home from "./components/Home"
import Videos from "./containers/Videos"
import VideoForm from "./components/VideoForm"
import NavBar from "./components/NavBar"
// import VideoItem from "./components/VideoItem"
// import Vid from "./components/Vid"

function App() {
  return (
    <div>
    
      <Router>
        <div>
        <NavBar />
          <Switch>
            <Route exact path="/home" render={(routerProps) => <Home {...routerProps} />}/>
            <Route exact path="/videos/new" render={(routerProps) => <VideoForm {...routerProps} />}/>
            <Route exact path="/videos" render={(routerProps) => <Videos {...routerProps} />}/>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
