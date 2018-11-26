import React from "react";
import Tweet from './Tweet';
import TweetSearch from './TweetSearch';

const FeedStyles = {
    container: {
        width: '60%',        
        marginTop: '10px',
        marginRight: '0.5em',
        marginLeft:'0.5em',
        border: '2px solid gray'
    },
    ul :{
        listStyleType: 'none',
        paddingLeft: '0.0em'
    }
}

const TweetData = {
    1: { name: 'Skye', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor', image: 'http://i.imgur.com/AItCxSs.jpg' },
    2: { name: 'Meria', description: 'nventore veritatis et quasi architecto beatae vitae dicta sunt explicabo', image: 'https://uploads.disquscdn.com/images/dbac4affedabe15de488e638b15a66ac3e8c68fecfc2ec2d7731eb264ae62b27.jpg' },
    3: { name: 'Ryan', description: 'git, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, ', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZSThpjVEzFvLfMMIErDI00jJvvQoZWI1ACW-ncK1IudmmtWXY' },
    4: { name: 'Skye', description: 'Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally', image: 'http://i.imgur.com/AItCxSs.jpg' },
}

class Feed extends React.Component {
    constructor() {
        super();
        let allTweets = [];
        for (let key in TweetData) {
            allTweets.push(
                <li>
                    <Tweet
                        name={TweetData[key].name}
                        description={TweetData[key].description}
                        image={TweetData[key].image}
                    />
                </li>
            );
        };
        this.state = { tweets: allTweets};
        this.addNewTweet = this.addNewTweet.bind(this);
    }

    addNewTweet(description) {
        let allTweets = this.state.tweets.slice();
        allTweets.unshift(
            <li>
                <Tweet
                    name='default'
                    description={description}
                    image='http://www.centro-renacer.org/wp-content/uploads/2016/06/blank-profile.png'
                />
            </li>
        );
        this.setState({ tweets: allTweets });
    }

    render() {
        console.log(this.state.tweets);
        return (
            <div style={FeedStyles.container}>
                <TweetSearch addNewTweetCallback={this.addNewTweet}/> 
                <br/>
                <ul style={FeedStyles.ul}>
                    {this.state.tweets}
                </ul>
            </div>
        );   
    }
}

export default Feed;