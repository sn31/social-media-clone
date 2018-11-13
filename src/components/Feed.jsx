import React from "react";
import Tweet from './Tweet';
import TweetSearch from './TweetSearch';

function Feed() {
    const FeedStyles = {
        container: {
            width: '30em',
            float: 'right',
            marginTop: '10px',
            marginRight: '0.5em',
            border: '2px solid gray'
        },
        ul :{
            listStyleType: 'none',
            paddingLeft: '0.0em'
        }
    }

    let tweets = [];
    const TweetData = {
        1: { name: 'Skye', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor', image: 'http://i.imgur.com/AItCxSs.jpg' },
        2: { name: 'Meria', description: 'nventore veritatis et quasi architecto beatae vitae dicta sunt explicabo', image: 'https://uploads.disquscdn.com/images/dbac4affedabe15de488e638b15a66ac3e8c68fecfc2ec2d7731eb264ae62b27.jpg' },
        3: { name: 'Ryan', description: 'git, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, ', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZSThpjVEzFvLfMMIErDI00jJvvQoZWI1ACW-ncK1IudmmtWXY' },
        4: { name: 'Skye', description: 'Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally', image: 'http://i.imgur.com/AItCxSs.jpg' },
    }

    for (let key in TweetData) {
        tweets.push(
            <li>
        <Tweet
            name={TweetData[key].name}
            description={TweetData[key].description}
            image={TweetData[key].image}
        />
        </li>
        )
    };
    return (
        <div style={FeedStyles.container}>
        <TweetSearch/> <br/>
            <ul style={FeedStyles.ul}>
                {tweets}
            </ul>
        </div>
    );
}

export default Feed;