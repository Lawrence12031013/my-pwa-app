import React, { useState, useRef } from 'react';

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const SwipeCalendar = () => {
//   const [currentMonthIndex, setCurrentMonthIndex] = useState(new Date().getMonth());
//   const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
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

    if (moveX - startX > 50 && !swipeHandledRef.current) {
        // 向左滑動（下一個月）
        swipeHandledRef.current = true
        setCurrentDate(({ year, month }) => {
          const newMonth = (month + 1) % 12;
          const newYear = newMonth === 0 ? year + 1 : year;
          return { year: newYear, month: newMonth };
        });
      } else if ( startX - moveX > 50 && !swipeHandledRef.current) {
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
    <div
      onTouchStart={handleTouchStart} 
      onTouchMove={handleTouchMove}
      style={{ width: '100%', height: '100vh', position:'absolute' ,textAlign: 'center', top: '0px'}}
    >
      <div className='month-year-bcg text-center' style={{marginTop: '48px'}}>
        <p className='month-year'>{months[currentDate.month]}{ currentDate.year }</p>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <SwipeCalendar />
    </div>
  );
}

export default App;
