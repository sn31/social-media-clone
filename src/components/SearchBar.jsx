import React from "react";

function SearchBar() {
    const SearchBarStyles = {
        float: 'right',
        marginRight: '50px',
        padding:'0.5em',
        fontSize: '1em',
    }
    return(
        <div style={SearchBarStyles}>
            <form>
                <input placeholder="Search">
                </input>
                <button>Tweet</button>
            </form>
        </div>
    );
}

export default SearchBar;