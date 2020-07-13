import React from 'react'

function Search({handleInput, search}) {
    
    return (
        //Input box
        <section className="searchbox-wrap">
            <input 
            type="text" 
            placeholder="Search for a movie..." 
            className="searchbox"
            onChange={handleInput}
            onKeyPress={search}/>
        </section>
    )
}

export default Search
