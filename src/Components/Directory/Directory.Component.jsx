import React from 'react'
import { createStructuredSelector } from 'reselect'
import MenuItem from '../MenuItems/MenuItems.Component'
import '../Directory/Directory.styles.scss'
import { connect } from 'react-redux'
import { selectDirectorySections } from '../../Redux/directory/directory.selectors'

const Directory = ({ sections }) => {
    return (
        <div className='directory-menu'>
            {sections.map(({ id, ...otherSectionProps }) => {
                return <MenuItem key={id} {...otherSectionProps} />
            })}
        </div>
    )

}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps, null)(Directory)