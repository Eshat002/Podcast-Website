import React from 'react'
import './PrimaryBtn.css'

const PrimaryBtn = ({ btnText }) => {
    return (
        <button className='primary-btn' type="button">{btnText}</button>
    )
}

export default PrimaryBtn
