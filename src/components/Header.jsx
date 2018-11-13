import React from "react";
import NavBar from "./Navbar";
import SearchBar from "./SearchBar";
function Header() {
    const HeaderStyles={
        borderBottom: '2px solid gray',
        height: '5vh',
        marginTop: '50px'
    }
    return(
        <div style={HeaderStyles}>
            <NavBar/>
            <SearchBar/>
        </div>
    );
}

export default Header;