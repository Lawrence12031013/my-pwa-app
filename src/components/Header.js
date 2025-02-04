import React, { Component } from 'react'
import '../assets/styles/header.css'

export default class Header extends Component {
  render() {
    return (
      <div className='header-bcg flex items-center justify-between'>
        <div className='flex w-24 justify-evenly'>
          <i class="fa-regular fa-calendar-days"></i>
          <i class="fa-solid fa-tag"></i>
        </div>
        <div className='text-center'>
          <p className='text-2xl text-white'>時間軸</p>
        </div>
        <div className='w-24 flex justify-evenly'>
          <i class="fa-solid fa-magnifying-glass"></i>
          <i class="fa-solid fa-gear"></i>
        </div>
      </div>
    )
  }
}
