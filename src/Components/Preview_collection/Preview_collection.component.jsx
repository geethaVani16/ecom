import React, { Component } from 'react';
import CollectionItem from './CollectionItem';
import '../Preview_collection/Preview_collection.styles.scss'

const PreviewCollection = ({ title, items }) => {
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {items.filter((item, idx) => idx < 4)
                    .map(({ id, ...otherItemProps }) => {
                        return (
                            <CollectionItem key={id} {...otherItemProps} />
                        )
                    })}
            </div>
        </div>
    );

}

export default PreviewCollection;