import React, { useState, useRef } from 'react';
import mood_1 from '../assets/images/mood-1.png'
import mood_2 from '../assets/images/mood-2.png'
import mood_3 from '../assets/images/mood-3.png'
import mood_4 from '../assets/images/mood-4.png'
import mood_5 from '../assets/images/mood-5.png'


export const MoodContent = () => {
    const alldata = [
        {id:10, day:3, date:'05', month:1, content:'測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試', mood:0, time:'2025-02-05', tab:'測試5'},
        {id:9, day:2, date:'04', month:1, content:'測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試', mood:1, time:'2025-02-04', tab:'測試4'},
        {id:8, day:1, date:'03', month:1, content:'測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試', mood:2, time:'2025-02-03', tab:'測試3'},
        {id:7, day:0, date:'02', month:1, content:'測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試', mood:3, time:'2025-02-02', tab:'測試2'},
        {id:6, day:6, date:'01', month:1, content:'測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試', mood:4, time:'2025-02-01', tab:'測試1'},
        {id:5, day:5, date:'31', month:0, content:'測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試', mood:0, time:'2025-01-31', tab:'測試1'},
        {id:4, day:4, date:'30', month:0, content:'測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試', mood:1, time:'2025-01-30', tab:'測試2'},
        {id:3, day:3, date:'29', month:0, content:'測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試', mood:2, time:'2025-01-29', tab:'測試3'},
        {id:2, day:2, date:'28', month:0, content:'測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試', mood:3, time:'2025-01-28', tab:'測試4'},
        {id:1, day:1, date:'27', month:0, content:'測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試', mood:4, time:'2025-01-27', tab:'測試5'},
    ]

    
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const moods = [mood_1, mood_2, mood_3, mood_4, mood_5];
    
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    
    const [startX, setStartX] = useState(0);
    const [currentDate, setCurrentDate] = useState({ year: new Date().getFullYear(), month: new Date().getMonth() }); // 預設為當天
    const [data, setData] = useState(alldata.filter((getdata) => getdata.month === new Date().getMonth()));
    
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
      
        if (Math.abs(startX - moveX) > 50 && !swipeHandledRef.current) {
          swipeHandledRef.current = true; // 避免重複觸發
      
          setCurrentDate(({ year, month }) => {
            let newMonth = month;
            let newYear = year;
      
            if (startX - moveX > 50) {
              // 向左滑動（下一個月）
              newMonth = (month + 1) % 12;
              newYear = newMonth === 0 ? year + 1 : year;
            } else if (moveX - startX > 50) {
              // 向右滑動（上一個月）
              newMonth = (month - 1 + 12) % 12;
              newYear = newMonth === 11 ? year - 1 : year;
            }
      
            // 更新資料
            setData(alldata.filter((getdata) => getdata.month === newMonth));
      
            return { year: newYear, month: newMonth };
          });
        }
      };
      
      const handleTouchEnd = () => {
        swipeHandledRef.current = false; // 允許下一次滑動
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
        { data.length === 0 ? 
            <>
                <p className='text-center mt-10'>目前沒有心情...</p>
            </> 
            :
            <div style={{zIndex: '9', position:'relative'}}>
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
        }
      </div>
        </div>
    </>
  )
}

export default MoodContent;
