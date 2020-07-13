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
    else return (<div className="not-found">Please enter a movie name</div>)
}

export default Results
