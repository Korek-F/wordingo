import React, { useLayoutEffect } from 'react'

export const Row = (props) => {
    const value = props.value
    const correct = props.correct

    return (
        <div className='row'>
            {props.value.map((item, i) => {
                const correct_cell = correct.includes(i)
                return <div className={correct_cell ? 'ceil correct' : 'ceil'} key={i}> {item}</div>
            })}
        </div >
    )
}
