import React from "react";
import ConnectionList from "./ConnectionList";
import Feed from "./Feed";
import Profile from "./Profile";

function Content() {
    const contentStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    };
    return (
        <div style={contentStyle}>
            <Profile/>
            <Feed/>
            <ConnectionList/>
        </div>

    );
}

export default Content;