import React from 'react';

export default function Display(props){
    let movies = props.movielist.map((item, index) => {
        return (<li key={index}>{item}</li>)
    })

    return(

        <div className="display">
            <h2
                className="counter"
            >{`${props.index}/${props.length}`}</h2>
            <h2
                className="name"
            >{props.name}</h2>
            <div>
                <p><span className="bold">From:</span>{props.from}</p>
                <p><span className="bold">Job Title:</span>{props.job}</p>
                <p><span className="bold">Employer:</span>{props.employer}</p>

                <h4 className="favMovies">Favorite Movies:</h4>
                <ol className="movList">
                    {movies}
                </ol>
            </div>
        </div>
    )
}