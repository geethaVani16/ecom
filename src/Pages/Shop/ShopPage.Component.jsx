import React from 'react'
import shopData from './shop.data'
import PreviewCollection from '../../Components/Preview_collection/Preview_collection.component'


class ShopPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            collections: shopData
        }
    }
    render() {
        const { collections } = this.state
        return (
            <div>
               {collections.map(({id, ...otherCollectionProps} )=> {
                   return <PreviewCollection key={id} {...otherCollectionProps}/>
               })}
            </div>
        )
    }
}
export default ShopPage