import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollections } from '../../Redux/shop/shop.selectors'
import PreviewCollection from '../Preview_collection/Preview_collection.component'
import './Collection-overview.styles.scss'

const CollectionOverview = ({collections}) => {
    return (
        <div className='collection-overview'>
             {collections.map(({ id, ...otherCollectionProps }) => {
            return <PreviewCollection key={id} {...otherCollectionProps} />
        })}
        </div>
    )
}


const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})
export default connect(mapStateToProps,null) (CollectionOverview)
