import React from 'react'

const PokemonThumb = ({id, image, name, type, _callback }) => {
    const style = type + " thumb-container";
    return (
        <div className={style}>
            <img src={image} alt={name} />
            <div className="detail-wrapper">
            <div className="number"><p>#{id}</p></div>
                <h3 className="pokemon-name">{name}</h3>
                <p className="pokemon-type">{type}</p>
            </div>
        </div>
    )
}

export default PokemonThumb