import React, { Component } from 'react';
import CollectionItem from '../Collection-item/collection-item.component';
import '../Preview_collection/Preview_collection.styles.scss'

const PreviewCollection = ({ title, items }) => {
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {items
                .filter((item, idx) => idx < 4)
                    .map((item ) => {
                        return (
                            <CollectionItem key={item.id} item={item} />
                        )
                    })}
            </div>
        </div>
    );

}

export default PreviewCollection;