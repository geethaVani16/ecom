import React from 'react'
import { connect } from 'react-redux'
import { addItem } from '../../Redux/cart/cart.action'
import CustomButton from '../Custom-Button/CustomButton'
import '../Preview_collection/CollectionItem.styles.scss'


const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item
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
            <CustomButton
                onClick={() => addItem(item)}
                inverted
            >Add To Cart</CustomButton>
        </div>
    )
}


const mapDispatchToProps = (dispatch) => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)