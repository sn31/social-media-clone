import React from "react";
import PropTypes from "prop-types";

function Connection(props) {
    const ConnectionStyles = {
        box: {
            float: 'right',
            margin: '.5em',
        },
        images: {
            height: '80px',
            float: 'left',
            marginRight: '0.5em'
            
        },
        name: {
            float: 'right',
            marginRight: '50px',
            marginTop: '-10px'
        },
        button: {
            backgroundColor: '#0198E1',
            color: 'white',
            padding: '0.8em',
            marginTop: '-5px'
        }

    }
    return (
        <div style={ConnectionStyles.box}>
            <div style={ConnectionStyles.images}>
                <img style={ConnectionStyles.images} src={props.image}/>
            </div>
            <div style={ConnectionStyles.name}>
                <h4>{props.name}</h4>
                <button style={ConnectionStyles.button}>Connect</button>
            </div>
        </div>
    );
}

Connection.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string
};

export default Connection;