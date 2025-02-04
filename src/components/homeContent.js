import React from 'react'
import '../assets/styles/page.css'
import { MoodContent } from './moodContent'

export const HomeContent = () => {
   
    return(
    <div>
      <div className='month-year-bcg text-center'>
        <p className='month-year'>February 2025</p>
      </div>
      <MoodContent />
    </div>
  )
}

export default HomeContent;
