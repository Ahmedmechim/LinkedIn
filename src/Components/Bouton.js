import React from 'react'
import './bouton.css'

const Bouton = ({Icon, titre, color}) => {
    return (
        <div>
            <div className="bouton">
                <Icon  style={{color: color }}/>
                <h4>{titre}</h4>
            </div>
        </div>
    )
}

export default Bouton
