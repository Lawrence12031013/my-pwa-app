import React, { useState, useRef } from 'react';
import mood_1 from '../assets/images/mood-1.png'
import mood_2 from '../assets/images/mood-2.png'
import mood_3 from '../assets/images/mood-3.png'
import mood_4 from '../assets/images/mood-4.png'
import mood_5 from '../assets/images/mood-5.png'


export const MoodContent = () => {
    const data = [
        {id:5, day:3, date:'05', content:'測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試', mood:0, time:'2025-02-05 11:00', tab:'測試5'},
        {id:4, day:2, date:'04', content:'測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試', mood:1, time:'2025-02-04 11:00', tab:'測試4'},
        {id:3, day:1, date:'03', content:'測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試', mood:2, time:'2025-02-03 11:00', tab:'測試3'},
        {id:2, day:0, date:'02', content:'測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試', mood:3, time:'2025-02-02 11:00', tab:'測試2'},
        {id:1, day:6, date:'01', content:'測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試', mood:4, time:'2025-02-01 11:00', tab:'測試1'},
    ]
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const moods = [mood_1, mood_2, mood_3, mood_4, mood_5];
    
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const [startX, setStartX] = useState(0);
      const [currentDate, setCurrentDate] = useState({ year: new Date().getFullYear(), month: new Date().getMonth() }); // 預設為 2024 年 1 月
    
      
      // 用於跟踪是否已經更新過年份
      const yearUpdatedRef = useRef(false);
      const swipeHandledRef = useRef(false);
    
      const handleTouchStart = (e) => {
        setStartX(e.touches[0].clientX);
        yearUpdatedRef.current = false;
        swipeHandledRef.current = false // 重置年份更新標誌
      };
    
      const handleTouchMove = (e) => {
        const moveX = e.touches[0].clientX;
    
        if ( startX - moveX > 50 && !swipeHandledRef.current) {
            // 向左滑動（下一個月）
            swipeHandledRef.current = true
            setCurrentDate(({ year, month }) => {
              const newMonth = (month + 1) % 12;
              const newYear = newMonth === 0 ? year + 1 : year;
              return { year: newYear, month: newMonth };
            });
          } else if ( moveX - startX > 50 && !swipeHandledRef.current) {
            // 向右滑動（上一個月）
            swipeHandledRef.current = true
            setCurrentDate(({ year, month }) => {
              const newMonth = (month - 1 + 12) % 12;
              const newYear = newMonth === 11 ? year - 1 : year;
              return { year: newYear, month: newMonth };
            });
          }
      };
    
  return (
    <>
        <div className='mood-content'>
        <div
            onTouchStart={handleTouchStart} 
            onTouchMove={handleTouchMove}
            style={{ width: '100%', height: 'calc( 100vh - 75px )' ,textAlign: 'center', top: '0px', position: 'absolute'}}
            >
            <div className='month-year-bcg text-center'>
                <p className='month-year'>{months[currentDate.month]}{ currentDate.year }</p>
            </div>
        <div style={{zIndex: '999', position:'relative'}}>
            {data.map( (content, index) => (
                <ul>
                    <li>
                        <div key={content.id} className='flex justify-around py-4 px-2 items-center' onClick={() => alert(1)}>
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
                    {index !== data.length - 1 && <hr />}
                </ul>
            ))}
        </div>
      </div>
        </div>
    </>
  )
}

export default MoodContent;
