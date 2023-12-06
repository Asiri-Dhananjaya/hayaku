import React from "react";
import Profile from './Pages/Profile';
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";

const App=()=>{
    return(
        <Router>
            <Routes>
                <Route path="/" Component={Profile}/>
            </Routes>
        </Router>
    )
}
export default App;