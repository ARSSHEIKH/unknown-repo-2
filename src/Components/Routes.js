import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import VerificationPage  from "./Pages/VerificationPage";
import Home  from "./Pages/Home";

const Routes = () => {
    return (
        <>
            <Router>
                <Route exact path="/" component={Home} />
                <Route path="/VerificationPage" component={VerificationPage} />
                {/* <Route path="/UpdatePassword" component={UpdatePassword} /> */}
            </Router>
        </>
    )
}
export default Routes