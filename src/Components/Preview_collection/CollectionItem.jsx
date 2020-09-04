import React from 'react'
import '../Preview_collection/CollectionItem.styles.scss'


const CollectionItem = ({ id, name, price, imageUrl }) => {
    return (
        <div className='collection-item'>
            <div
                className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'> Rs: {price}</span>
            </div>
        </div>
    )
}

export default CollectionItem