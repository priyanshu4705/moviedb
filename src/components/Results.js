import React from 'react'
import Result from './Result'

function Results({ results }) {
    if(results)
    return (
        <section className="results">
            {
                results.map(result =>(
                    <Result key={result.imdbID} result={result}/>
                ))
            }
        </section>
    )
    else return (<div>Movie not found</div>)
}

export default Results
