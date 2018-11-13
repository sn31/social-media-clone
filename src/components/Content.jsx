import React from "react";
import ConnectionList from "./ConnectionList";
import Feed from "./Feed";
import Profile from "./Profile";

function Content() {
    return(
        <div>
            <ConnectionList/>
            <Feed/>
            <Profile/>
        </div>

    );
}

export default Content;