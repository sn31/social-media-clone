import React from "react";
import $ from '../../node_modules/jquery/dist/jquery';

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
            width: '22em',
        },
    };

    let toggle = function () {
        if ($('#newTweet').attr('class', 'hide')) {
            $('#newTweet').removeClass('hide');
            $('#newTweetBtn').removeClass('hide');
            $('#writeBtn').addClass('hide');
        }
    };

    let handleSubmit = function (event) {
        event.preventDefault();
    }

    return (
        <table style={TweetSearchStyles.form}>
            <style jsx>{`
            .hide {
                display: none;
            }
            `}
            </style>
            <tr>
                <td style={{ width: '40em' }}>
                    <img style={{ width: '30px', marginLeft: '1em' }} src="http://uploads.webflow.com/5356d27d26a94dc12f000e4b/5364b7dd835263b534000758_square-fish-logo.png" />
                </td>
                <td>
                    <button id="writeBtn" onClick={toggle}>Write</button>
                </td>
                <td>
                    <form onSubmit={handleSubmit}>
                        <input id="newTweet" style={TweetSearchStyles.inputStyles} className="hide" placeholder="What's happening?">
                        </input>
                        <button id="newTweetBtn" type="submit" className="hide">Tweet</button>
                    </form>
                </td>
            </tr>

        </table>
    );
}

export default TweetSearch;