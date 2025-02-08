import React, { useState } from "react";
import '../assets/styles/detail.css'

interface DetailProps {
  data: {
    id: number;
    tab: string;
    time: string;
    content: string;
    mood: number;
  };
  onClose: () => void; // 新增關閉函數
}

const Detail: React.FC<DetailProps> = ({ data, onClose }) => {
  const moods = [
    require("../assets/images/mood-1.png"),
    require("../assets/images/mood-2.png"),
    require("../assets/images/mood-3.png"),
    require("../assets/images/mood-4.png"),
    require("../assets/images/mood-5.png"),
  ];

  const [ edit, setEdit ]= useState(false)

  const editcontent = (boolean) => {
    setEdit( (prev) => !prev)
  }

  return (
    <div className="detail-content text-center">
      <div className="flex pr-2 mt-2 justify-around">
        <p>標籤：{data.tab}</p>
        <p>建立時間：{data.time}</p>
      </div>
      <textarea className="detail-textarea" defaultValue={data.content} readOnly={ !edit }></textarea>
      <div className="flex items-center justify-center mt-2">
        <span>今日心情：</span>
        <img className="px-2 detail-mood" src={moods[data.mood]} alt="mood-icon" />
      </div>
      <div className="flex justify-evenly mt-3">
        <button className={ !edit ? 'edit' : 'confirm'} onClick={() => editcontent()}>{ !edit ? '編輯' : '確定'}</button>
        <button className="close" onClick={onClose}>返回</button>
      </div>
    </div>
  );
};

export default Detail;
