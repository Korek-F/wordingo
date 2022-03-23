import React, { useState } from 'react'

export const RowInput = (props) => {
    const [myEntry, changeMyEntry] = useState("")

    const checkAnswer = () => {
        if (myEntry.length === 6) {
            props.check(myEntry.toUpperCase())
            changeMyEntry("")
        }
    }


    return (
        <>
            {props.finished && <h2>Good Job! {props.attempts} Attempts</h2>}

            {!props.finished && <>
                <div className='inputs'>
                    <input className="entryInput" type="text" minLength="6" maxLength="6" value={myEntry} onChange={(e) => changeMyEntry(e.target.value)} />
                    <button className="entryButton" onClick={checkAnswer}>Check</button>
                </div>
            </>
            }
        </>
    )
}
