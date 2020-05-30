import React from 'react'
import '../HomePage/HomePage.styles.scss'
import Directory from '../../Components/Directory/Directory.Component'

const HomePage = () => {
    return (
        <div className='homepage'>
            <h1>Welcome To My Home Page</h1>
            <Directory/>
        </div>
    )

}
export default HomePage