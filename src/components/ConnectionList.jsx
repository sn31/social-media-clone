import React from "react";
import Connection from "./Connection";

function ConnectionList() {
    const ConnectionListStyles = {
        ul: {
            listStyleType: 'none',
        },
        container: {
            width: '20%',
            minWidth: '260px',
            border: '2px solid gray',
            marginTop: '10px',
        },
        text: {
            marginLeft: '2.8em'
        }
    };

    let connections = [];
    const ConnectionData ={
        names: ['Skye','Meria','Ryan'],
        images: ['http://i.imgur.com/AItCxSs.jpg','https://uploads.disquscdn.com/images/dbac4affedabe15de488e638b15a66ac3e8c68fecfc2ec2d7731eb264ae62b27.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZSThpjVEzFvLfMMIErDI00jJvvQoZWI1ACW-ncK1IudmmtWXY']
    }

    for (let i =0; i<ConnectionData.names.length;i++)
    {
        connections.push(
          
            <Connection
            name = {ConnectionData.names[i]}
            image = {ConnectionData.images[i]}
            />
        )
    }
    return(
        <div style={ConnectionListStyles.container}>
        <h4 style={ConnectionListStyles.text}>Lorem ipsum</h4>
            <ul style={ConnectionListStyles.ul}>
                <li style={{ paddingLeft: '5px'}}>{connections}</li>
            </ul>
       
       </div>
    );
}

export default ConnectionList;