import React from 'react'
import PreviewCollection from '../../Components/Preview_collection/Preview_collection.component'
import {  createStructuredSelector } from 'reselect'
import { selectCollections } from '../../Redux/shop/shop.selectors'
import { connect } from 'react-redux'


const ShopPage = ({ collections }) => (
    <div className='shop-page'>
        {collections.map(({ id, ...otherCollectionProps }) => {
            return <PreviewCollection key={id} {...otherCollectionProps} />
        })}
    </div>

)

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})
export default connect(mapStateToProps, null)(ShopPage) 