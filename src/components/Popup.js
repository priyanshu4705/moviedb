import React from 'react'

function Popup({ selected, closePopup}) {
    return (
        <section className="popup">
            <div className="content">
                <h2>{ selected.Title }<span>({ selected.Year })</span></h2>
                <p className="rating">Rating: { selected.imdbRating }</p>
                <div className="plot">
                    <img src={ selected.Poster }/>
                    <p>{ selected.Plot }</p>
                    <p>Released: { selected.Released }</p>
                    <p>Director: { selected.Director }</p>
                    <p>Cast: { selected.Actors }</p>
                    <p>Awards: { selected.Awards }</p>
                </div>
                <button className="close" onClick={closePopup }>Close</button>
            </div>
        </section>
    )
}

export default Popup
