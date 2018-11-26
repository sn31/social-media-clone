import React from "react";

function ProfileHeader() {
    const ProfileHeaderStyles = {
        ul: {
            listStyleType: 'none',
            float: 'left',
            marginRight: '1em',
            marginTop: '0.0em',
        },
        row: {
            height: '5.5em',
            backgroundColor: '#308fde',
        },
        table: {
            position: 'relative',
            height: '10em',
            float: 'left',
        },
        image: {
            position: 'absolute',
            marginTop: '3.5em',
            marginLeft: '1em',
            zIndex: '40',
            width: '5em',
            borderRadius: '15px',
            border: '2px solid white'
        },
        name: {
            float: 'right',
            marginRight: '8em'
        },
        container: {
            width: '100%',
        },
        rowBot: {
            border: '2px solid gray',
            height: '150px',
            marginTop: '-2px'
        }
    }
    return (
        <div style={ProfileHeaderStyles.container}>
            <img style={ProfileHeaderStyles.image} src="http://www.centro-renacer.org/wp-content/uploads/2016/06/blank-profile.png" />
            <table style={ProfileHeaderStyles.table}>
                <tr style={ProfileHeaderStyles.row}>
                    <p></p>
                </tr>
                <tr>
                    <div style={ProfileHeaderStyles.rowBot}>
                        <h4 style={ProfileHeaderStyles.name}>Panatda Catlin</h4>
                        <ul>
                            <li style={ProfileHeaderStyles.ul}>TWEETS</li>
                            <li style={ProfileHeaderStyles.ul}>FOLLOWING</li>
                            <li style={ProfileHeaderStyles.ul}>FOLLOWERS</li>
                        </ul>
                    </div>
                </tr>
            </table>
        </div>
    );
}

export default ProfileHeader;