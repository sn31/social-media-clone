import React from "react";

function SearchBar() {
    const SearchBarStyles = {
       form: {
        float: 'right',
        marginRight: '50px',
       
        },

        inputStyles: {
            fontSize: '1em',
            marginRight: '0.5em',
            padding: '0.8em',
            borderRadius: '10px',
            border: '2px solid lightblue'
        }
    }
    return(
        <div style={SearchBarStyles.form}>
            <form>
                <input style={SearchBarStyles.inputStyles} placeholder="Search">
                </input>
                <button style={SearchBarStyles.inputStyles}>Tweet</button>
            </form>
        </div>
    );
}

export default SearchBar;