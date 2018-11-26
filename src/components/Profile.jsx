import React from "react";
import Text from "./Text";
import ProfileHeader from "./ProfileHeader";

function Profile() {
    const ProfileStyles = {
        container: {
            width: '20%',
            minWidth: '350px',
            paddingTop: '10px',
            height: '30em'
        }

    }
    return (
        <div style={ProfileStyles.container}>
            <ProfileHeader />
            <Text />
        </div>

    );
}

export default Profile;