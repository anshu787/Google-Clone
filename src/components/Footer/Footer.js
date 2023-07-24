import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
    <footer>
        <div className='top'>
            <div>
                <ul>
                    <li>
                        <span className='cty'>India</span>
                    </li>
                </ul>
            </div>
        </div>
        <div className='bottom'>
            <div className='itematleft'>
            <ul>
                <li>
                    <a>About
</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a>Advertising</a>
                </li>
            </ul>
            <ul>
                <li>
                   <a>Business</a> 
                </li>
            </ul>
            <ul>
                <li>
                  <a>How Search Works</a>  
                </li>
            </ul>
            </div>
            <div className='itematright'>
            <ul>
                <li>
                   <a>Privacy</a> 
                </li>
            </ul>
            <ul>
                <li>
                   <a>Terms</a> 
                </li>
            </ul>
            <ul>
                <li>
                   <a>Settings</a> 
                </li>
            </ul>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer