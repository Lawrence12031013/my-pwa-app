import React, { Component } from 'react'
import '../assets/styles/footer.css'


export default class Footer extends Component {
  render() {
    return (
      <div className='flex justify-evenly items-center py-1 w-full footer-button'>
        <i class="fa-solid fa-bars" onClick={() => alert(2)}></i>
        <i class="fa-regular fa-square-plus"></i>
        <i class="fa-solid fa-chart-line"></i>
      </div>
    )
  }
}
