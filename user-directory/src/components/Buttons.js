import React from 'react';

export default function Buttons(props){
    let previous = '< Previous'
    let next = 'Next >'

    return(
        <div className="buttons">
            <p
                className="incBtn"
                onClick={() => props.changeIndex(false)}
            >{previous}</p>
            <div className="spcBtn">
                <button
                    onClick={() => props.edit()}
                >Edit</button>
                <button
                    onClick={props.delete}
                >Delete</button>
                <button
                    onClick={() => props.new()}
                >New</button>
            </div>
            <p
                className="incBtn"
                onClick={() => props.changeIndex(true)}
            >{next}</p>
        </div>
    )
}