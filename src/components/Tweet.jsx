import React from "react";
import PropTypes from "prop-types";
import emptyHeart from '../img/icons8-heart-50.png';
import filledHeart from '../img/icons8-heart-filled-50.png';

const TweetStyles = {
    box: {
        width: '100%',
        borderBottom: '2px solid gray',
        height: '12em',
    },
    images: {
        height: '80px',
        display: 'inline-block',
        marginTop: '-10px',
        marginLeft: '0.5em',
        paddingTop: '-1em',
        paddingBottom: '-1em',
    },
    name: {
        float: 'right',
        marginLeft: '0.5em',
    },
};

class Tweet extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLiked:false
        };
        this.props = props;
        this.handleLike = this.handleLike.bind(this);
    }

    handleLike(){
        this.setState({isLiked:!this.state.isLiked});
        console.log(this.state.isLiked);
    }
   render() {
       let currentLikeStatus = null;
       if (!this.state.isLiked) {
           currentLikeStatus = <img onClick={this.handleLike} src={emptyHeart} className="heartIcon" style={{width: '20px', marginLeft:'0.5em'}}/>
       }
       else {
        currentLikeStatus = <img onClick={this.handleLike} src={filledHeart} className="heartIcon" style={{width: '20px',marginLeft:'0.5em'}}/>
       }
    return (
        <table style={TweetStyles.box}>
            <tr>
                <td>
                    <img style={TweetStyles.images} src={this.props.image} />
                </td>
                <td style={TweetStyles.name}>
                    <h4>{this.props.name}</h4>
                    <p>{this.props.description}</p>
                    {currentLikeStatus}
                </td>
            </tr>
           
        </table>
    );
}
}

Tweet.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string
};

export default Tweet;