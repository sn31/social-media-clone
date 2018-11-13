import React from "react";


function NavBar() {
    const NavBarStyles = {
        listItemStyles: {
            listStyleType: 'none',
            border: '1px solid #c4c8ce',
            float: 'left',
            padding: '0.5em'
        },
        listStyles: {
            backgroundColor: '#c4c8ce',
            paddingRight: '100px'
        }
    };

    return (
        <div style={{backgroundColor:'#c4c8ce'}}>
            <ul style={NavBarStyles.listStyles}>
                <li style={NavBarStyles.listItemStyles}>Home</li>
                <li style={NavBarStyles.listItemStyles}>Notifications</li>
                <li style={NavBarStyles.listItemStyles}>Messages</li>
            </ul>
        </div>
    );
}

export default NavBar;