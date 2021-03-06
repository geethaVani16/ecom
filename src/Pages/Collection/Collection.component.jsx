import React from 'react'
import { connect } from 'react-redux'
import "./Collection.styles.scss"
import { selectParticalCollection } from '../../Redux/shop/shop.selectors'
import CollectionItem from '../../Components/Collection-item/collection-item.component'

const CollectionPage = ({ collection }) => {
    const {title,items} =collection
    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'> 
                {items.map(item => (
                    <CollectionItem key={item.id} item={item}/>
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectParticalCollection(ownProps.match.params.collectionId)(state)
});




export default connect(mapStateToProps)(CollectionPage)


