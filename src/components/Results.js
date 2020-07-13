import React from 'react'
import Result from './Result'

function Results({ results, openPopup }) {
    if(results)
    return (
        <section className="results">
            {
                results.map(result =>(
                    <Result key={result.imdbID} result={result} openPopup={openPopup}/>
                ))
            }
        </section>
    )
    else return (<div>Movie not found</div>)
}

export default Results
