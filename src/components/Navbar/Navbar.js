import React from 'react'
import Icon from '../../assets/img/icon/icon.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
        <div className='nav_item_right'>
          <ul className='nav_links'>
            <li className='nav_items'>
              <a href='https://mail.google.com/mail/u/0/#inbox'>Gmail</a>
            </li>
          </ul>
          <ul className='nav_links'>
            <li className='nav_items'>
              <a href='https://www.google.com/imghp?hl=en&ogbl'>Images</a>
            </li>
          </ul>
          <ul className='nav_links'>
            <li className='nav_items'>
           <img className='new' src={Icon} alt='icon'></img>
            </li>
          </ul>
          <ul className='nav_links'>
            <li className='nav_items'>
              <button className='signin_button'>Sign In</button>
            </li>
          </ul>
        </div>
    </nav>
  )
}

export default Navbar