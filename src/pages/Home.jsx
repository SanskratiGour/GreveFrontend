import React from 'react'
import Anouncements from '../components/Anouncements'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'

const Home = () => {
    return (
        <div>
            <Anouncements />
            <Navbar />
            <Slider/>
            <Categories/>
           
        </div>
    )
}

export default Home


