import React from "react";
import PropTypes from "prop-types";

function Tweet(props) {
    const TweetStyles = {
        box: {
            borderBottom: '2px solid gray',
            height: '12em',
        },
        images: {
            height: '80px',
            display: 'inline-block',
            marginTop: '-60px',
            marginLeft: '0.5em'
        },
        name: {
            float: 'right',
            marginLeft: '0.5em',
        },
    }

    return (
        <table style={TweetStyles.box}>
            <tr>
                <td>
                    <img style={TweetStyles.images} src={props.image} />
                </td>
                <td style={TweetStyles.name}>
                    <h4>{props.name}</h4>
                    <p>{props.description}</p>
                </td>
            </tr>
        </table>
    );
}

Tweet.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string
};

export default Tweet;