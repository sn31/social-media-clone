import React from "react";
import $ from '../../node_modules/jquery/dist/jquery';
import PropTypes from 'prop-types';

function TweetSearch(props) {
    const TweetSearchStyles = {
        form: {
            width: '100%',
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
            $('#newTweet').show();
            $('#newTweetBtn').show();
            $('#writeBtn').hide();
        }
    };

    let handleSubmit = function (event) {
        event.preventDefault();
        $('#newTweet').hide();
        $('#newTweetBtn').hide();
        $('#writeBtn').show();
        console.log(_tweet.value);
        props.addNewTweetCallback(_tweet.value);
        _tweet.value ='';
    }
    let _tweet = null;

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
                        <input id="newTweet" style={TweetSearchStyles.inputStyles} className="hide" placeholder="What's happening?"
                        ref={(input)=>{_tweet=input;}}>
                        </input>
                        <button id="newTweetBtn" type="submit" className="hide">Tweet</button>
                    </form>
                </td>
            </tr>

        </table>
    );
}

TweetSearch.propTypes = {
    addNewTweetCallback: PropTypes.func,
}

export default TweetSearch;