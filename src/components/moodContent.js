import React from 'react'
import mood_1 from '../assets/images/mood-1.png'
import mood_2 from '../assets/images/mood-2.png'
import mood_3 from '../assets/images/mood-3.png'
import mood_4 from '../assets/images/mood-4.png'
import mood_5 from '../assets/images/mood-5.png'
import SwipeCalendar from './swipermonth'

export const MoodContent = () => {
    const data = [
        {id:5, day:3, date:'05', content:'測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試', mood:0, time:'2025-02-05 11:00', tab:'測試5'},
        {id:4, day:2, date:'04', content:'測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試', mood:1, time:'2025-02-04 11:00', tab:'測試4'},
        {id:3, day:1, date:'03', content:'測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試', mood:2, time:'2025-02-03 11:00', tab:'測試3'},
        {id:2, day:0, date:'02', content:'測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試', mood:3, time:'2025-02-02 11:00', tab:'測試2'},
        {id:1, day:6, date:'01', content:'測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試', mood:4, time:'2025-02-01 11:00', tab:'測試1'},
    ]
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const moods = [mood_1, mood_2, mood_3, mood_4, mood_5]
    
  return (
    <>
        <div className='mood-content'>
            <SwipeCalendar />
        {data.map( content => (
            <ul>
                <li>
                    <div key={content.id} className='flex justify-around py-4 px-2 items-center'>
                        <div className='text-center date-content'>
                            <p className='text-3xl font-bold month-year py-1 border-b-1'>{content.date}</p>
                            <p className='text-xl month-year py-1'>{days[content.day]}</p>
                        </div>
                        <div className='w-80 pl-3 flex flex-col'>
                            <div className='content-height'>
                                <p className='text-lg'>{content.content}</p>
                            </div>
                            <div className='text-center flex items-center justify-center'>
                                <i className="fa-regular fa-clock month-year px-1"></i>
                                <p className='month-year'>{content.time}</p>
                                <p className='month-year px-1'>{content.tab}</p>
                            </div>
                        </div>
                        <div>
                        <img className='px-2' src={ moods[content.mood] } alt="mood-icon" />
                        </div>
                    </div>
                </li>
                <hr />
            </ul>
        ))}
      </div>
    </>
  )
}

export default MoodContent;
