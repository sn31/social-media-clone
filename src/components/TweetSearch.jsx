import React from "react";

function TweetSearch() {
    const TweetSearchStyles = {
       form: {
        backgroundColor: '#B0E0E6',
        marginRight: '0px'
        },

        inputStyles: {
            fontSize: '1em',
            marginRight: '0.5em',
            padding: '0.8em',
            border: '2px solid lightblue',
            width: '22em'
        }
    }
    return(
        <table style={TweetSearchStyles.form}>
        <tr>
            <td style={{width: '40em'}}>
                <img style={{width: '50%', marginLeft: '1em'}}src="http://uploads.webflow.com/5356d27d26a94dc12f000e4b/5364b7dd835263b534000758_square-fish-logo.png"/>
            </td>
            <td>
            <form>
                <input style={TweetSearchStyles.inputStyles} placeholder="What's happening?">
                </input>
            </form>
            </td>
        </tr>
            
        </table>
    );
}

export default TweetSearch;