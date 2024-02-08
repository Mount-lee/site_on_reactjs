import { useState } from 'react'
import Header from './components/Header/Header'
import Red_line from './components/red_line/Red_line'
import Ads from './components/Ads/Ads'
import Next_step from './components/Next_step/Next_step'
import Members from './components/Members/Members'
import Footer from './components/Footer/Footer'


export default function App() {

  return (
    <div>
        <Header />
        <Red_line />
        <Ads />
        <Next_step />
        <Members />
        <Red_line />
        <Footer />
    </div>
    )
}

